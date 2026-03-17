import { useEffect, useRef } from 'react';
import {
  Vector3,
  MeshPhysicalMaterial,
  InstancedMesh,
  DirectionalLight,
  Clock,
  AmbientLight,
  OctahedronGeometry,
  ShaderChunk,
  Scene,
  Color,
  Object3D,
  SRGBColorSpace,
  MathUtils,
  PMREMGenerator,
  Vector2,
  WebGLRenderer,
  PerspectiveCamera,
  PointLight,
  ACESFilmicToneMapping,
  Plane,
  Raycaster
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// ---- Three wrapper ----
class ThreeApp {
  #config: any;
  canvas: any;
  camera: any;
  cameraMinAspect: any;
  cameraMaxAspect: any;
  cameraFov: any;
  maxPixelRatio: any;
  minPixelRatio: any;
  scene: any;
  renderer: any;
  #pp: any;
  size: any = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render: any;
  onBeforeRender: any = () => {};
  onAfterRender: any = () => {};
  onAfterResize: any = () => {};
  #visible = false;
  #running = false;
  isDisposed = false;
  #resizeObserver: any;
  #intersectionObserver: any;
  #resizeTimeout: any;
  #clock = new Clock();
  #time = { elapsed: 0, delta: 0 };
  #rafId: any;

  constructor(config: any) {
    this.#config = { ...config };
    this.camera = new PerspectiveCamera();
    this.cameraFov = this.camera.fov;
    this.scene = new Scene();
    this.#initRenderer();
    this.render = () => this.renderer.render(this.scene, this.camera);
    this.resize();
    this.#initListeners();
  }

  #initRenderer() {
    this.canvas = this.#config.canvas;
    this.canvas.style.display = 'block';
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
      ...(this.#config.rendererOptions ?? {})
    });
    this.renderer.outputColorSpace = SRGBColorSpace;
  }

  #initListeners() {
    if (!(this.#config.size instanceof Object)) {
      window.addEventListener('resize', this.#onResize);
      if (this.#config.size === 'parent' && this.canvas.parentNode) {
        this.#resizeObserver = new ResizeObserver(this.#onResize);
        this.#resizeObserver.observe(this.canvas.parentNode);
      }
    }
    this.#intersectionObserver = new IntersectionObserver(
      (entries) => {
        this.#visible = entries[0].isIntersecting;
        this.#visible ? this.#start() : this.#stop();
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    );
    this.#intersectionObserver.observe(this.canvas);
    document.addEventListener('visibilitychange', this.#onVisibility);
  }

  #onResize = () => {
    if (this.#resizeTimeout) clearTimeout(this.#resizeTimeout);
    this.#resizeTimeout = setTimeout(() => this.resize(), 100);
  };

  #onVisibility = () => {
    if (this.#visible) {
      document.hidden ? this.#stop() : this.#start();
    }
  };

  resize() {
    let w: number, h: number;
    if (this.#config.size === 'parent' && this.canvas.parentNode) {
      w = this.canvas.parentNode.offsetWidth;
      h = this.canvas.parentNode.offsetHeight;
    } else {
      w = window.innerWidth;
      h = window.innerHeight;
    }
    this.size.width = w;
    this.size.height = h;
    this.size.ratio = w / h;
    this.camera.aspect = w / h;
    if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
      const t = Math.tan(MathUtils.degToRad(this.cameraFov / 2)) / (this.camera.aspect / this.cameraMaxAspect);
      this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(t));
    } else {
      this.camera.fov = this.cameraFov;
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
    this.renderer.setSize(w, h);
    let pr = window.devicePixelRatio;
    if (this.maxPixelRatio && pr > this.maxPixelRatio) pr = this.maxPixelRatio;
    this.renderer.setPixelRatio(pr);
    this.size.pixelRatio = pr;
    this.onAfterResize(this.size);
  }

  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const fov = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(fov / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    }
  }

  #start() {
    if (this.#running) return;
    this.#running = true;
    this.#clock.start();
    const animate = () => {
      this.#rafId = requestAnimationFrame(animate);
      this.#time.delta = this.#clock.getDelta();
      this.#time.elapsed += this.#time.delta;
      this.onBeforeRender(this.#time);
      this.render();
      this.onAfterRender(this.#time);
    };
    animate();
  }

  #stop() {
    if (this.#running) {
      cancelAnimationFrame(this.#rafId);
      this.#running = false;
      this.#clock.stop();
    }
  }

  clear() {
    this.scene.traverse((e: any) => {
      if (e.isMesh && typeof e.material === 'object' && e.material !== null) {
        Object.keys(e.material).forEach((k: string) => {
          const v = e.material[k];
          if (v !== null && typeof v === 'object' && typeof v.dispose === 'function') v.dispose();
        });
        e.material.dispose();
        e.geometry.dispose();
      }
    });
    this.scene.clear();
  }

  dispose() {
    window.removeEventListener('resize', this.#onResize);
    document.removeEventListener('visibilitychange', this.#onVisibility);
    this.#resizeObserver?.disconnect();
    this.#intersectionObserver?.disconnect();
    this.#stop();
    this.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.isDisposed = true;
  }
}

// ---- Pointer tracking ----
const pointerMap = new Map<HTMLElement, any>();
const globalPointer = new Vector2();
let pointerListenersAttached = false;

function createPointerHandler(domElement: HTMLElement, handlers: any) {
  const state = {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    touching: false,
    ...handlers
  };
  if (!pointerMap.has(domElement)) {
    pointerMap.set(domElement, state);
    if (!pointerListenersAttached) {
      document.body.addEventListener('pointermove', onPointerMove);
      document.body.addEventListener('pointerleave', onPointerLeave);
      document.body.addEventListener('touchstart', onTouchStart, { passive: false });
      document.body.addEventListener('touchmove', onTouchMove, { passive: false });
      document.body.addEventListener('touchend', onTouchEnd, { passive: false });
      pointerListenersAttached = true;
    }
  }
  (state as any).dispose = () => {
    pointerMap.delete(domElement);
    if (pointerMap.size === 0) {
      document.body.removeEventListener('pointermove', onPointerMove);
      document.body.removeEventListener('pointerleave', onPointerLeave);
      document.body.removeEventListener('touchstart', onTouchStart);
      document.body.removeEventListener('touchmove', onTouchMove);
      document.body.removeEventListener('touchend', onTouchEnd);
      pointerListenersAttached = false;
    }
  };
  return state;
}

function updatePointerPos(state: any, rect: DOMRect) {
  state.position.x = globalPointer.x - rect.left;
  state.position.y = globalPointer.y - rect.top;
  state.nPosition.x = (state.position.x / rect.width) * 2 - 1;
  state.nPosition.y = (-state.position.y / rect.height) * 2 + 1;
}

function isInsideRect(rect: DOMRect) {
  return globalPointer.x >= rect.left && globalPointer.x <= rect.left + rect.width &&
         globalPointer.y >= rect.top && globalPointer.y <= rect.top + rect.height;
}

function processPointer() {
  for (const [elem, s] of pointerMap) {
    const r = elem.getBoundingClientRect();
    if (isInsideRect(r)) {
      updatePointerPos(s, r);
      if (!s.hover) { s.hover = true; s.onEnter?.(s); }
      s.onMove?.(s);
    } else if (s.hover && !s.touching) {
      s.hover = false;
      s.onLeave?.(s);
    }
  }
}

function onPointerMove(e: PointerEvent) { globalPointer.set(e.clientX, e.clientY); processPointer(); }
function onPointerLeave() { for (const s of pointerMap.values()) { if (s.hover) { s.hover = false; s.onLeave?.(s); } } }
function onTouchStart(e: TouchEvent) {
  if (!e.touches.length) return;
  e.preventDefault();
  globalPointer.set(e.touches[0].clientX, e.touches[0].clientY);
  for (const [elem, s] of pointerMap) {
    const r = elem.getBoundingClientRect();
    if (isInsideRect(r)) { s.touching = true; updatePointerPos(s, r); if (!s.hover) { s.hover = true; s.onEnter?.(s); } s.onMove?.(s); }
  }
}
function onTouchMove(e: TouchEvent) {
  if (!e.touches.length) return;
  e.preventDefault();
  globalPointer.set(e.touches[0].clientX, e.touches[0].clientY);
  for (const [elem, s] of pointerMap) {
    const r = elem.getBoundingClientRect();
    updatePointerPos(s, r);
    if (isInsideRect(r)) { if (!s.hover) { s.hover = true; s.touching = true; s.onEnter?.(s); } s.onMove?.(s); }
    else if (s.hover && s.touching) { s.onMove?.(s); }
  }
}
function onTouchEnd() {
  for (const [, s] of pointerMap) {
    if (s.touching) { s.touching = false; if (s.hover) { s.hover = false; s.onLeave?.(s); } }
  }
}

// ---- Physics ----
const { randFloat, randFloatSpread } = MathUtils;
const tmpV1 = new Vector3(), tmpV2 = new Vector3(), tmpV3 = new Vector3();
const tmpV4 = new Vector3(), tmpV5 = new Vector3(), tmpV6 = new Vector3();
const tmpV7 = new Vector3(), tmpV8 = new Vector3(), tmpV9 = new Vector3(), tmpV10 = new Vector3();

class GemPhysics {
  config: any;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  rotationData: Float32Array;
  angularVelData: Float32Array;
  scaleRatioData: Float32Array;
  center = new Vector3();

  constructor(config: any) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.rotationData = new Float32Array(3 * config.count).fill(0);
    this.angularVelData = new Float32Array(3 * config.count).fill(0);
    this.scaleRatioData = new Float32Array(3 * config.count).fill(1);
    this.center.toArray(this.positionData, 0);
    for (let i = 0; i < config.count; i++) {
      const b = 3 * i;
      if (i > 0) {
        this.positionData[b] = randFloatSpread(2 * config.maxX);
        this.positionData[b + 1] = randFloatSpread(2 * config.maxY);
        this.positionData[b + 2] = randFloatSpread(2 * config.maxZ);
      }
      // Random angular velocities for organic rotation
      this.angularVelData[b] = randFloatSpread(1.5);
      this.angularVelData[b + 1] = randFloatSpread(1.5);
      this.angularVelData[b + 2] = randFloatSpread(1.5);
      // Non-uniform scale ratios per gem
      this.scaleRatioData[b] = randFloat(0.85, 1.15);
      this.scaleRatioData[b + 1] = randFloat(0.5, 0.75); // flattened Y for gem shape
      this.scaleRatioData[b + 2] = randFloat(0.85, 1.15);
    }
    this.sizeData[0] = config.size0;
    for (let i = 1; i < config.count; i++) this.sizeData[i] = randFloat(config.minSize, config.maxSize);
  }

  update(time: any) {
    const { config: c, positionData: p, velocityData: v, sizeData: s, rotationData: r, angularVelData: av } = this;
    let start = 0;
    if (c.controlSphere0) {
      start = 1;
      tmpV1.fromArray(p, 0).lerp(this.center, 0.1).toArray(p, 0);
      tmpV4.set(0, 0, 0).toArray(v, 0);
    }
    for (let i = start; i < c.count; i++) {
      const b = 3 * i;
      tmpV2.fromArray(p, b);
      tmpV5.fromArray(v, b);
      tmpV5.y -= time.delta * c.gravity * s[i];
      tmpV5.multiplyScalar(c.friction);
      tmpV5.clampLength(0, c.maxVelocity);
      tmpV2.add(tmpV5);
      tmpV2.toArray(p, b);
      tmpV5.toArray(v, b);
      // Update rotation with individual angular velocity
      r[b] += av[b] * time.delta;
      r[b + 1] += av[b + 1] * time.delta;
      r[b + 2] += av[b + 2] * time.delta;
    }
    // collisions
    for (let i = start; i < c.count; i++) {
      const bi = 3 * i;
      tmpV2.fromArray(p, bi);
      tmpV5.fromArray(v, bi);
      const ri = s[i];
      for (let j = i + 1; j < c.count; j++) {
        const bj = 3 * j;
        tmpV3.fromArray(p, bj);
        tmpV6.fromArray(v, bj);
        const rj = s[j];
        tmpV7.copy(tmpV3).sub(tmpV2);
        const dist = tmpV7.length();
        const sumR = ri + rj;
        if (dist < sumR) {
          const overlap = sumR - dist;
          tmpV8.copy(tmpV7).normalize().multiplyScalar(0.5 * overlap);
          tmpV9.copy(tmpV8).multiplyScalar(Math.max(tmpV5.length(), 1));
          tmpV10.copy(tmpV8).multiplyScalar(Math.max(tmpV6.length(), 1));
          tmpV2.sub(tmpV8); tmpV5.sub(tmpV9);
          tmpV2.toArray(p, bi); tmpV5.toArray(v, bi);
          tmpV3.add(tmpV8); tmpV6.add(tmpV10);
          tmpV3.toArray(p, bj); tmpV6.toArray(v, bj);
        }
      }
      if (c.controlSphere0) {
        tmpV7.copy(tmpV1).sub(tmpV2);
        const dist = tmpV7.length();
        const sumR0 = ri + s[0];
        if (dist < sumR0) {
          const diff = sumR0 - dist;
          tmpV8.copy(tmpV7.normalize()).multiplyScalar(diff);
          tmpV9.copy(tmpV8).multiplyScalar(Math.max(tmpV5.length(), 2));
          tmpV2.sub(tmpV8); tmpV5.sub(tmpV9);
        }
      }
      // walls
      if (Math.abs(tmpV2.x) + ri > c.maxX) { tmpV2.x = Math.sign(tmpV2.x) * (c.maxX - ri); tmpV5.x = -tmpV5.x * c.wallBounce; }
      if (c.gravity === 0) {
        if (Math.abs(tmpV2.y) + ri > c.maxY) { tmpV2.y = Math.sign(tmpV2.y) * (c.maxY - ri); tmpV5.y = -tmpV5.y * c.wallBounce; }
      } else if (tmpV2.y - ri < -c.maxY) { tmpV2.y = -c.maxY + ri; tmpV5.y = -tmpV5.y * c.wallBounce; }
      const maxB = Math.max(c.maxZ, c.maxSize);
      if (Math.abs(tmpV2.z) + ri > maxB) { tmpV2.z = Math.sign(tmpV2.z) * (c.maxZ - ri); tmpV5.z = -tmpV5.z * c.wallBounce; }
      tmpV2.toArray(p, bi); tmpV5.toArray(v, bi);
    }
  }
}

// ---- SSS Material ----
class GemMaterial extends MeshPhysicalMaterial {
  uniforms: any;
  onBeforeCompile2?: any;
  constructor(params: any) {
    super(params);
    this.uniforms = {
      thicknessDistortion: { value: 0.1 },
      thicknessAmbient: { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower: { value: 2 },
      thicknessScale: { value: 10 }
    };
    this.defines = { ...this.defines, USE_UV: '' };
    this.onBeforeCompile = (shader: any) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader =
        `uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        ` + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }
        void main() {`
      );
      const searchStr = 'RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );';
      const replaceStr = `RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);`;
      const replaced = ShaderChunk.lights_fragment_begin.split(searchStr).join(replaceStr);
      shader.fragmentShader = shader.fragmentShader.replace('#include <lights_fragment_begin>', replaced);
      if (this.onBeforeCompile2) this.onBeforeCompile2(shader);
    };
  }
}

// ---- Color gradient helper ----
function createColorGradient(colors: number[]) {
  const cols = colors.map(c => new Color(c));
  return {
    getColorAt(ratio: number, out = new Color()) {
      const s = Math.max(0, Math.min(1, ratio)) * (cols.length - 1);
      const idx = Math.floor(s);
      if (idx >= cols.length - 1) return cols[cols.length - 1].clone();
      const a = s - idx;
      out.r = cols[idx].r + a * (cols[idx + 1].r - cols[idx].r);
      out.g = cols[idx].g + a * (cols[idx + 1].g - cols[idx].g);
      out.b = cols[idx].b + a * (cols[idx + 1].b - cols[idx].b);
      return out;
    }
  };
}

// ---- Gem Instanced Mesh ----
const dummyObj = new Object3D();

// Emerald colors
const EMERALD_COLORS = [0x0D7D4E, 0x2ECC71, 0x1ABC9C];
// Ruby colors
const RUBY_COLORS = [0xC0392B, 0xE74C3C, 0x922B21];

class GemInstancedMesh extends InstancedMesh {
  config: any;
  physics: GemPhysics;
  ambientLight: AmbientLight;
  light: PointLight;
  light2: PointLight;
  dirLight: DirectionalLight;
  emeraldGradient: any;
  rubyGradient: any;
  hoverFactor = 0;
  targetHover = 0;

  constructor(renderer: WebGLRenderer, opts: any = {}) {
    const config = {
      count: 60,
      colors: EMERALD_COLORS,
      ambientColor: 0xffffff,
      ambientIntensity: 1.0,
      lightIntensity: 300,
      materialParams: {
        metalness: 0.05,
        roughness: 0.02,
        clearcoat: 1,
        clearcoatRoughness: 0.01,
        transmission: 0.8,
        ior: 2.42,
        thickness: 1.5,
        specularIntensity: 1,
        specularColor: 0xffffff,
        attenuationDistance: 0.5,
        attenuationColor: 0x0D7D4E,
      },
      minSize: 0.3,
      maxSize: 0.8,
      size0: 0.8,
      gravity: 0.005,
      friction: 0.998,
      wallBounce: 0.95,
      maxVelocity: 0.08,
      maxX: 5,
      maxY: 5,
      maxZ: 2,
      controlSphere0: false,
      followCursor: true,
      ...opts
    };

    const envScene = new RoomEnvironment();
    const envMap = new PMREMGenerator(renderer).fromScene(envScene).texture;
    // OctahedronGeometry with more subdivisions for smoother facets
    const geo = new OctahedronGeometry(1, 2);
    const mat = new GemMaterial({ envMap, ...config.materialParams });
    (mat as any).envMapRotation = { x: -Math.PI / 2 };

    super(geo, mat, config.count);
    this.config = config;
    this.physics = new GemPhysics(config);

    this.ambientLight = new AmbientLight(config.ambientColor, config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(config.colors[0], config.lightIntensity);
    this.add(this.light);
    // Second point light from opposite angle
    this.light2 = new PointLight(config.colors[2], config.lightIntensity * 0.6);
    this.light2.position.set(-5, 3, -2);
    this.add(this.light2);
    // Directional light for consistent highlights
    this.dirLight = new DirectionalLight(0xffffff, 1.5);
    this.dirLight.position.set(2, 5, 3);
    this.add(this.dirLight);

    this.emeraldGradient = createColorGradient(EMERALD_COLORS);
    this.rubyGradient = createColorGradient(RUBY_COLORS);

    this.setGemColors(0);
  }

  setGemColors(hoverFactor: number) {
    const tmpE = new Color();
    const tmpR = new Color();
    const tmpOut = new Color();
    for (let i = 0; i < this.count; i++) {
      const ratio = i / this.count;
      this.emeraldGradient.getColorAt(ratio, tmpE);
      this.rubyGradient.getColorAt(ratio, tmpR);
      tmpOut.r = tmpE.r + hoverFactor * (tmpR.r - tmpE.r);
      tmpOut.g = tmpE.g + hoverFactor * (tmpR.g - tmpE.g);
      tmpOut.b = tmpE.b + hoverFactor * (tmpR.b - tmpE.b);
      this.setColorAt(i, tmpOut);
      if (i === 0) this.light.color.copy(tmpOut);
    }
    if (this.instanceColor) this.instanceColor.needsUpdate = true;
  }

  update(time: any) {
    // Smooth hover transition
    this.hoverFactor += (this.targetHover - this.hoverFactor) * 0.03;
    this.setGemColors(this.hoverFactor);

    this.physics.update(time);
    for (let i = 0; i < this.count; i++) {
      dummyObj.position.fromArray(this.physics.positionData, 3 * i);
      // Random-ish rotation based on position for gem variety
      dummyObj.rotation.set(
        dummyObj.position.x * 0.5 + time.elapsed * 0.1,
        dummyObj.position.y * 0.3 + time.elapsed * 0.15,
        dummyObj.position.z * 0.4
      );
      if (i === 0 && this.config.followCursor === false) {
        dummyObj.scale.setScalar(0);
      } else {
        dummyObj.scale.setScalar(this.physics.sizeData[i]);
      }
      dummyObj.updateMatrix();
      this.setMatrixAt(i, dummyObj.matrix);
      if (i === 0) this.light.position.copy(dummyObj.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

// ---- Main factory ----
function createGemPit(canvas: HTMLCanvasElement, opts: any = {}) {
  const app = new ThreeApp({ canvas, size: 'parent', rendererOptions: { antialias: true, alpha: true } });
  app.renderer.toneMapping = ACESFilmicToneMapping;
  app.maxPixelRatio = 1.5;
  app.camera.position.set(0, 0, 20);
  app.camera.lookAt(0, 0, 0);
  app.cameraMaxAspect = 1.5;
  app.resize();

  let gems = new GemInstancedMesh(app.renderer, opts);
  app.scene.add(gems);

  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersection = new Vector3();

  canvas.style.touchAction = 'none';
  canvas.style.userSelect = 'none';
  (canvas.style as any).webkitUserSelect = 'none';

  const pointer = createPointerHandler(canvas, {
    onEnter() {
      gems.targetHover = 1;
    },
    onMove() {
      raycaster.setFromCamera(pointer.nPosition, app.camera);
      app.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersection);
      gems.physics.center.copy(intersection);
      gems.config.controlSphere0 = true;
    },
    onLeave() {
      gems.config.controlSphere0 = false;
      gems.targetHover = 0;
    }
  });

  app.onBeforeRender = (time: any) => { gems.update(time); };
  app.onAfterResize = (size: any) => {
    gems.config.maxX = size.wWidth / 2;
    gems.config.maxY = size.wHeight / 2;
  };

  return {
    dispose() {
      pointer.dispose();
      app.dispose();
    }
  };
}

// ---- React Component ----
interface GemPitProps {
  className?: string;
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
}

const GemPit = ({ className = '', count = 50, gravity = 0.005, friction = 0.998, wallBounce = 0.95, followCursor = true }: GemPitProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<{ dispose: () => void } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    instanceRef.current = createGemPit(canvas, { count, gravity, friction, wallBounce, followCursor });
    return () => {
      instanceRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas className={className} ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default GemPit;
