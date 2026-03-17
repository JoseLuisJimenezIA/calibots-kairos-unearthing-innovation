

## Plan: Galería circular giratoria con tarjetas ProfileCard

### Concepto
Crear un carrusel circular 3D en CSS/JS que rote automáticamente (como el CircularGallery) pero donde cada elemento sea un `ProfileCard` con su efecto holográfico, en lugar de simples imágenes WebGL.

### Por qué no reusar CircularGallery directamente
CircularGallery renderiza texturas en planos WebGL — no puede contener componentes DOM como ProfileCard. Se necesita un carrusel 3D basado en DOM.

### Archivo a crear

**`src/components/CircularProfileGallery.tsx`**
- Carrusel circular 3D usando CSS `perspective` + `rotateY` + `translateZ`
- Los items se distribuyen en un círculo 3D (360° / n items)
- Auto-rotación continua con `requestAnimationFrame` (velocidad ~0.08°/frame)
- Pausa la rotación al hacer hover/touch (igual que CircularGallery)
- Drag horizontal para rotar manualmente
- Cada slot renderiza un `<ProfileCard>` con sus props (name, title, isCoach, behindGlowColor)
- Props: `items`, `autoRotateSpeed`, `radius`

**`src/components/CircularProfileGallery.css`**
- Container con `perspective: 1200px`
- Inner rotator con `transform-style: preserve-3d`
- Cada item posicionado con `rotateY(angle) translateZ(radius)`
- Transición suave, backface-visibility hidden para items traseros

### Archivo a modificar

**`src/pages/QuienesSomos.tsx`**
- Reemplazar la grilla de ProfileCards por `<CircularProfileGallery>` dentro de un contenedor `h-[600px]`
- Pasar `teamMembers` mapeados con sus props de ProfileCard
- Quitar el texto "Pasa el cursor sobre cada tarjeta..."

### Resultado
- Galería que gira automáticamente en 3D como antes
- Cada tarjeta es un ProfileCard holográfico con tilt + glow
- Se pausa al interactuar, se puede arrastrar para rotar

