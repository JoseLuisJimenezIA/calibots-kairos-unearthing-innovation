

## Agregar fotos nuevas a DomeGallery y mostrar a color

### Cambios

**1. Copiar 8 nuevas imágenes a `src/assets/`**
- `grupo_13-2.jpeg`, `grupo_completo_1-2.jpeg`, `grupo_completo_2-2.jpeg`
- `grupo5.jpeg`, `grupo6.jpeg`, `grupo7.jpeg`, `grupo8.jpeg`

Note: `grupo_completo_1-2` and `grupo_completo_2-2` are different photos from the existing `grupo_completo_1` and `grupo_completo_2`.

**2. Actualizar `src/pages/Galeria.tsx`**
- Import the 8 new images
- Add them to the `galleryImages` array (total: 15 images)
- Remove `grayscale` prop so photos display in full color

### Archivos modificados
| Archivo | Cambio |
|---|---|
| `src/assets/grupo5.jpeg` ... `grupo8.jpeg` (4) | Nuevos assets |
| `src/assets/grupo_13-2.jpeg` | Nuevo asset |
| `src/assets/grupo_completo_1-2.jpeg` | Nuevo asset |
| `src/assets/grupo_completo_2-2.jpeg` | Nuevo asset |
| `src/pages/Galeria.tsx` | Importar nuevas fotos, agregar al array, quitar grayscale |

