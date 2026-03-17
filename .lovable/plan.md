

## Plan: Agregar Orb animado al Hero del Index

### Resumen
Crear un componente `Orb` usando OGL (ya instalado) con shaders WebGL que genera una esfera luminosa animada. Se colocará como fondo decorativo en el Hero de `Index.tsx`, reemplazando el glow radial animado actual. Los colores se adaptarán a la paleta CaliBots: dorado (`#C8962D`) y teal (`#49A68C`) sobre fondo oscuro (`#0F0B07`).

### Archivos a crear

**`src/components/Orb.css`**
- Estilos del contenedor (position relative, width/height 100%, z-index 0).

**`src/components/Orb.tsx`**
- Componente React con el shader GLSL completo proporcionado por el usuario.
- Props: `hue`, `hoverIntensity`, `rotateOnHover`, `forceHoverState`, `backgroundColor`.
- Usa `ogl` (Renderer, Program, Mesh, Triangle, Vec3) — ya disponible en el proyecto.
- Incluye funciones `hexToVec3` y `hslToRgb` para conversión de colores.

### Archivos a modificar

**`src/pages/Index.tsx`**
- Importar `Orb`.
- Reemplazar el bloque "Animated radial glows" (líneas 36-42) con el Orb:
  ```tsx
  <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
    <div style={{ width: '500px', height: '500px' }}>
      <Orb
        hue={35}
        hoverIntensity={1.5}
        rotateOnHover
        forceHoverState={false}
        backgroundColor="#0F0B07"
      />
    </div>
  </div>
  ```
- `hue={35}` desplaza los colores base del shader hacia el rango dorado/ámbar de CaliBots.
- `backgroundColor="#0F0B07"` coincide con el fondo oscuro del sitio para integración visual perfecta.

### Colores adaptados
- El shader base usa púrpuras y cianes. Con `hue={35}` se rota al rango dorado-teal que encaja con la identidad CaliBots.
- El fondo oscuro `#0F0B07` (~`hsl(25 30% 6%)`) coincide con `--background` del sitio.

