

## Plan: GemPit -- Fondo interactivo de gemas para toda la página

### Concepto
Crear un componente `GemPit` basado en el código Ballpit proporcionado, pero con **geometrías facetadas** (octaedros/icosaedros) que parezcan gemas/piedras preciosas, y un efecto de **cambio de color esmeralda → rubí** al pasar el mouse. Se colocará como fondo fijo detrás de todo el contenido de la página Index.

### Archivos a crear

**`src/components/GemPit.tsx`**
- Adaptar el código Ballpit completo (clases `x`, `W`, `Z`, `Y`, helpers de interacción)
- Cambios clave vs Ballpit original:
  - **Geometría**: Reemplazar `SphereGeometry` por `OctahedronGeometry(1, 0)` (facetas visibles = aspecto de gema)
  - **Colores base**: Gradiente de esmeraldas (`#0D7D4E`, `#2ECC71`, `#1ABC9C`) 
  - **Color hover**: Transición suave a rubíes (`#C0392B`, `#E74C3C`, `#922B21`) usando interpolación en el loop de render
  - **Material**: `clearcoat: 1`, `metalness: 0.3`, `roughness: 0.1`, `transmission: 0.3` para efecto cristalino/refractivo
  - **Config**: `count: 60`, `gravity: 0.005`, `friction: 0.998`, `maxVelocity: 0.08` (más lento y elegante)
  - **followCursor**: activado para que las gemas reaccionen al mouse
- Exponer props: `className`, `count`, `gravity`, `friction`, `followCursor`

### Archivos a modificar

**`src/pages/Index.tsx`**
- Importar `GemPit`
- Agregar como capa fija detrás de todo el contenido:
```tsx
<div className="flex min-h-screen flex-col bg-background">
  {/* GemPit background layer */}
  <div className="fixed inset-0 z-0 opacity-40 pointer-events-auto">
    <GemPit count={50} gravity={0.005} friction={0.998} followCursor />
  </div>
  
  <div className="relative z-10"> {/* Wrap all existing content */}
    <Navbar />
    {/* ... rest of sections ... */}
    <Footer />
  </div>
</div>
```
- `opacity-40` para que no compita con el contenido pero sea visible
- `pointer-events-auto` para que responda al mouse a través del contenido

### Efecto de color hover
En el loop de render, interpolar los colores de las instancias entre el set esmeralda y el set rubí según la proximidad del cursor:
- Sin hover: tonos verdes/esmeralda
- Con hover: transición gradual a rojos/rubí
- Velocidad de transición: `lerp` con factor 0.03 (cambio suave)

### Dependencias
- `three` 0.160.0 ya instalado
- `three/examples/jsm/environments/RoomEnvironment.js` ya disponible

