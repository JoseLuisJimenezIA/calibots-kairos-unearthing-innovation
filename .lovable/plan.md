

## Plan: Agregar efecto ShapeBlur como fondo decorativo en botones principales

### Consideración de rendimiento
Crear un canvas WebGL **por cada botón** sería muy pesado (ya tenemos 2 contextos WebGL activos). En su lugar, el ShapeBlur se usará como **fondo decorativo detrás de los grupos de botones principales** — un solo canvas que cubre el área de los CTAs.

### Cambios

#### 1. Crear componente `src/components/ShapeBlur.tsx`
- Copiar el código del shader proporcionado como componente React
- Acepta props: `variation`, `shapeSize`, `roundness`, `borderSize`, `circleSize`, `circleEdge`, `className`
- Usa Three.js (ya está en el proyecto por el Orb)

#### 2. Aplicar en Hero de Index (`src/pages/Index.tsx`)
- Envolver los dos botones del hero ("Conoce ARGOS" y "Nuestro equipo") con un contenedor `relative`
- Colocar `<ShapeBlur />` como fondo `absolute` detrás de los botones con `pointer-events-none` y opacidad reducida
- Lazy load con `DeferredRender` para no afectar FCP

#### 3. Aplicar en botones de navegación de otras páginas (opcional)
- Galería (filtros), JuegoDelRobot (tabs) — solo si el usuario lo desea después

### Resultado
- Efecto visual de blur/shape reactivo al mouse detrás de los botones principales del hero
- Un solo canvas WebGL adicional (no uno por botón)
- Sin impacto significativo en rendimiento gracias a lazy loading

