

## Agregar 8 fotos nuevas a DomeGallery con orientación correcta

### Problema
Las fotos se recortan porque todos los tiles del DomeGallery usan `object-fit: cover` con tiles cuadrados. Las fotos verticales (grupo15, grupo16, grupo17) se cortan mucho.

### Solución
Cambiar `object-fit: cover` a `object-fit: contain` en los tiles de la galería para que cada foto se muestre completa sin recortar, con fondo oscuro detrás para rellenar el espacio sobrante.

### Cambios

**1. Copiar 8 imágenes a `src/assets/`**
- `grupo9.jpeg` a `grupo17.jpeg` (8 fotos nuevas)

**2. Actualizar `src/pages/Galeria.tsx`**
- Importar las 8 nuevas imágenes
- Agregarlas al array `galleryImages` (total: 22 imágenes)

**3. Actualizar `src/components/DomeGallery.css`**
- Cambiar `.item__image img` de `object-fit: cover` a `object-fit: contain`
- Agregar `background: rgba(0,0,0,0.3)` al `.item__image` para que las fotos verticales no tengan espacios transparentes
- Hacer lo mismo en `.viewer .enlarge img` para la vista ampliada

### Archivos modificados
| Archivo | Cambio |
|---|---|
| `src/assets/grupo9-17.jpeg` (8) | Nuevos assets |
| `src/pages/Galeria.tsx` | Importar y agregar 8 fotos |
| `src/components/DomeGallery.css` | `object-fit: contain` + fondo oscuro |

