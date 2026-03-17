

## Plan: Quitar efecto de brillo/shine/glare de las ProfileCards

Solo se eliminarán las capas visuales de brillo holográfico que aparecen al pasar el mouse. El carrusel 3D, el tilt y todo lo demás se mantienen exactamente igual.

### Cambios

**`src/components/ProfileCard.tsx`** (líneas 270-271):
- Eliminar `<div className="pc-shine" />` y `<div className="pc-glare" />` del JSX
- Eliminar `<div className="pc-behind" />` (el glow difuso detrás de la tarjeta, línea 266)

**`src/components/ProfileCard.css`**:
- Eliminar todas las reglas CSS de `.pc-shine`, `.pc-shine::before`, `.pc-shine::after`, `.pc-glare`, `.pc-behind` y las animaciones `pc-holo-bg`
- Mantener todo lo demás (`.pc-card`, `.pc-avatar-content`, `.pc-details`, tilt transforms, etc.)

### Resultado
- Las tarjetas siguen girando en el carrusel 3D con tilt interactivo
- Se elimina el efecto holográfico de colores y el brillo que aparece al acercar el mouse
- Las tarjetas quedan con su fondo oscuro, avatar, nombre y badge — aspecto limpio

