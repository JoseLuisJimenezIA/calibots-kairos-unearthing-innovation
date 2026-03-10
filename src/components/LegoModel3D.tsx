// @ts-nocheck
import { Suspense, useRef, lazy } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const LegoModel = () => {
  const { scene } = useGLTF("/models/lego.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={ref} scale={2.5} position={[0, -1.2, 0]}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/models/lego.glb");

const LegoModel3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow behind model */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[60%] w-[60%] rounded-full bg-primary/20 blur-[80px] animate-glow-pulse" />
      </div>
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#F5D060" />
        <directionalLight position={[-3, 3, -3]} intensity={0.6} color="#7FFFCF" />
        <pointLight position={[0, 3, 0]} intensity={0.8} color="#E3B03F" />
        <Suspense fallback={null}>
          <LegoModel />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.5}
            scale={8}
            blur={2}
            far={4}
            color="#E3B03F"
          />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default LegoModel3D;
