

## Galería armoniosa: tiles con cover, vista ampliada con contain

### Problema actual
Con `object-fit: contain`, las fotos horizontales muestran barras negras feas arriba y abajo dentro de los tiles cuadrados. Eso rompe la armonía visual de la esfera 3D.

### Solución
Usar dos estrategias diferentes:
- **Tiles de la esfera**: `object-fit: cover` — cada tile se llena completamente, sin barras negras, aspecto uniforme y armónico
- **Vista ampliada (click)**: `object-fit: contain` — al hacer click en una foto, se muestra completa sin recortar

Esto da lo mejor de ambos mundos: la esfera se ve limpia y profesional, y al tocar una foto se ve completa.

### Cambios

**1. `src/components/DomeGallery.css`**
- `.item__image img`: cambiar a `object-fit: cover` con `object-position: center`
- `.viewer .enlarge img`: mantener `object-fit: contain` para ver la foto completa al ampliar

**2. `src/pages/Galeria.tsx`** — sin cambios necesarios (las fotos ya están importadas y a color)

| Archivo | Cambio |
|---|---|
| `src/components/DomeGallery.css` | Tiles: cover. Ampliada: contain. |

