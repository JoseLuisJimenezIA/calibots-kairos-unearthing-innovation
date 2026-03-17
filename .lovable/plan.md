

## Plan: GooeyNav — Navegación con efecto gooey y colores de identidad

### Concepto
Reemplazar la navegación desktop actual del `Navbar` con el componente `GooeyNav`, manteniendo el menú móvil hamburger existente. Los colores se adaptan a la identidad: fondo oscuro `#0F0B07`, partículas en dorado/teal/carmesí, texto crema.

### Archivos a crear

**`src/components/GooeyNav.tsx`**
- Componente adaptado del código proporcionado con TypeScript
- Integrar `react-router-dom` navigation: cada item tiene `href` que usa `useNavigate()` en vez de anchor tags
- Colores de partículas usando la paleta de identidad:
  - `--color-1`: `hsl(40 76% 50%)` (dorado/primary)
  - `--color-2`: `hsl(160 40% 45%)` (teal/secondary)  
  - `--color-3`: `hsl(8 70% 52%)` (carmesí/accent)
  - `--color-4`: `hsl(40 20% 90%)` (crema/foreground)
- Props: `colors={[1, 2, 3, 1, 2, 3, 1, 4]}`

**`src/components/GooeyNav.css`**
- CSS completo del componente proporcionado
- Ajustes de identidad:
  - `.gooey-nav-container nav ul` → `color: hsl(40 20% 90%)` (crema)
  - `.gooey-nav-container nav ul li.active` → `color: hsl(25 30% 6%)` (fondo oscuro)
  - `.effect.filter::before` → `background: hsl(25 30% 6%)` (fondo oscuro para el contrast filter)
  - `.effect.filter::after` y `li::after` → `background: hsl(40 76% 50%)` (dorado) en vez de blanco
  - `.effect.text.active` → `color: hsl(25 30% 6%)` (texto oscuro sobre pill dorado)
  - Font: `font-family: 'Rajdhani', sans-serif; text-transform: uppercase; letter-spacing: 0.1em`

### Archivos a modificar

**`src/components/Navbar.tsx`**
- Importar `GooeyNav`
- Reemplazar el `<nav className="hidden ... lg:flex">` desktop con `GooeyNav`
- Mapear `navItems` al formato `{ label, href }` del GooeyNav
- Calcular `initialActiveIndex` basado en `location.pathname`
- Manejar navegación: en el onClick/handleClick, llamar `navigate(href)`
- Mantener el menú móvil hamburger sin cambios

### Resultado
- Navegación desktop con efecto gooey de partículas doradas/teal/carmesí
- Pill activo en dorado con texto oscuro
- Partículas que explotan al cambiar de sección
- Menú móvil sin cambios
- Coherencia total con la paleta de identidad

