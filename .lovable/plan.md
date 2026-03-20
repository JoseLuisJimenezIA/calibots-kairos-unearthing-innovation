

## Fotos de la galería a color

### Problema
El componente `DomeGallery` tiene `grayscale = true` por defecto (línea 117 de DomeGallery.tsx), lo que aplica un filtro CSS `grayscale(1)` a todas las fotos.

### Solución
Pasar `grayscale={false}` en la llamada a `<DomeGallery>` en `src/pages/Galeria.tsx`.

### Cambio

**`src/pages/Galeria.tsx`** — agregar prop `grayscale={false}` al componente DomeGallery (alrededor de línea 103).

