

## Plan: Integrar StaggeredMenu como menú móvil con identidad CaliBots

### Enfoque
Reemplazar el menú móvil básico actual del Navbar con el componente `StaggeredMenu`, adaptado a la paleta de colores del equipo. El `StaggeredMenu` se usará como menú lateral animado en pantallas `< lg`, mientras el `GooeyNav` se mantiene en desktop.

### Cambios

#### 1. Crear `src/components/StaggeredMenu.tsx` y `src/components/StaggeredMenu.css`
- Adaptar el código proporcionado como componente React+TypeScript
- Integrar con `react-router-dom` (`useNavigate`) para navegación SPA en lugar de `<a href>`
- Colores adaptados a la identidad:
  - `colors`: `['#1A1308', '#D4A017']` (fondo oscuro → dorado)
  - `accentColor`: `'#D4A017'` (dorado primario)
  - `menuButtonColor`: `'#E8E2D4'` (foreground crema)
  - Panel background: `#0F0B07` (background oscuro) en vez de blanco
  - Texto de items: crema/foreground en vez de negro
  - Social links: crema con hover dorado
- CSS: Invertir colores del panel (fondo oscuro, texto claro) para mantener coherencia con el tema dark

#### 2. Modificar `src/components/Navbar.tsx`
- Reemplazar el botón hamburguesa y el menú desplegable móvil por `StaggeredMenu`
- Pasar los `navItems` como items del menú
- Pasar las redes sociales del footer (Instagram, TikTok, YouTube) como `socialItems`
- El `StaggeredMenu` solo se renderiza en `lg:hidden`, posicionado como overlay fixed
- Usar `logoUrl="/logo.png"` para el logo del equipo
- Al hacer clic en un item, navegar con router y cerrar el menú

#### 3. Ajustes CSS (`StaggeredMenu.css`)
- Panel background: `#0F0B07` con backdrop-blur
- `.sm-panel-item` color: `#E8E2D4` (crema) en vez de `#000`
- `.sm-panel-item:hover` color: `#D4A017` (dorado)
- `.sm-socials-title` color: `#D4A017`
- `.sm-socials-link` color: `#E8E2D4`, hover: `#D4A017`
- Border del panel: `border-left: 1px solid hsl(40 76% 50% / 0.15)`
- Numbering accent: dorado

### Resultado
- Menú móvil premium con animaciones staggered y colores de la identidad CaliBots
- Desktop mantiene el GooeyNav sin cambios
- Navegación SPA funcional con cierre automático al seleccionar

