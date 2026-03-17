

## Plan: Agregar GridScan al Hero con colores de identidad CaliBots

### Concepto
Añadir el componente GridScan como capa de fondo en el Hero section, con los colores de la identidad CaliBots (dorado/mostaza para las líneas de la grilla y carmesí para el scan), creando un efecto futurista que contraste con el fondo oscuro.

### Dependencia nueva
Instalar `postprocessing` (requerido por GridScan para bloom y chromatic aberration). **No** se necesita `face-api.js` ya que no usaremos webcam.

### Archivos a crear

**`src/components/GridScan.tsx`**
- Adaptar el código proporcionado eliminando toda la lógica de face-api/webcam (no se usa)
- Colores de identidad CaliBots:
  - `linesColor`: `#D4A017` (dorado/mostaza) — líneas de la grilla
  - `scanColor`: `#D44B2C` (carmesí) — barrido de escaneo
- Config: `sensitivity={0.55}`, `gridScale={0.1}`, `scanOpacity={0.4}`, `bloomIntensity={0.6}`, `chromaticAberration={0.002}`, `noiseIntensity={0.01}`, `enablePost={true}`
- Sin webcam, sin face-api — solo mouse/touch tracking
- Incluir CSS inline o en archivo separado `GridScan.css`

**`src/components/GridScan.css`**
- Estilos del contenedor (.gridscan, posición relativa, overflow hidden)

### Archivos a modificar

**`src/pages/Index.tsx`**
- Importar `GridScan`
- Agregar como capa en el Hero (z-[1], entre el video y el contenido), reemplazando o complementando el scan-line effect actual:
```tsx
{/* GridScan overlay */}
<div className="absolute inset-0 z-[1] pointer-events-auto opacity-60">
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="#D4A017"
    scanColor="#D44B2C"
    gridScale={0.1}
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
  />
</div>
```
- Mantener el Orb y el video existentes; el GridScan se superpone como capa adicional

### Resultado
El Hero tendrá una grilla 3D interactiva en dorado con barridos carmesí que responde al mouse, creando un efecto sci-fi/arqueológico coherente con la identidad CaliBots sobre el video de cuevas.

