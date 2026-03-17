

## Plan: Auto-rotación de la galería circular

Agregar auto-scroll continuo a la `CircularGallery` que gire sola automáticamente, y se pause cuando el usuario interactúa con el mouse/touch, reanudándose después.

### Cambios en `src/components/CircularGallery.tsx`

1. **Agregar prop `autoRotateSpeed`** (default `0.5`) al componente y a `GalleryApp`.

2. **En `GalleryApp`**: agregar propiedad `autoRotateSpeed` y flag `isInteracting`.

3. **En `update()`** (línea 227): cuando `!this.isDown`, incrementar `this.scroll.target += this.autoRotateSpeed` en cada frame para que gire sola continuamente.

4. **En `onTouchDown`**: marcar `this.isDown = true` (ya existe) — esto pausa el auto-scroll.

5. **En `onTouchUp`**: ya marca `this.isDown = false` — eliminar el `onCheck()` (snap) para que el auto-scroll retome suavemente sin snap.

6. **En `onWheel`**: usar un timer para pausar el auto-scroll brevemente tras cada evento de rueda, luego reanudar.

7. **Actualizar props del componente** para pasar `autoRotateSpeed`.

### Resultado
- La galería gira sola continuamente hacia la derecha
- Al arrastrar con mouse/touch, se pausa y el usuario controla
- Al soltar, retoma el giro automático suavemente
- La rueda del mouse sigue funcionando para control manual

