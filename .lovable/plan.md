

## Aplicar la nueva paleta de colores terrosa

Vamos a actualizar toda la paleta del sitio usando los 5 colores que compartiste, manteniendo la estructura actual pero con esta nueva identidad visual mas terrosa y arqueologica.

### Mapeo de colores

| Color Hex | HSL aproximado | Uso en el sitio |
|-----------|---------------|-----------------|
| `#D9C7B8` | `27 27% 79%` | **Background** - Fondo general del sitio (beige claro) |
| `#402116` | `16 47% 17%` | **Foreground** - Texto principal, hero y footer (marron muy oscuro) |
| `#734E20` | `33 57% 29%` | **Primary** - Color de marca principal, botones, acentos (dorado oscuro) |
| `#733924` | `16 52% 30%` | **Accent** - Botones CTA, elementos de enfasis (rojo ladrillo) |
| `#73473D` | `11 31% 35%` | **Muted-foreground** - Texto secundario (marron rosado) |

### Cambios por archivo

**`src/index.css`** - Actualizar variables CSS:

- `--background`: `27 27% 79%` (beige `#D9C7B8`)
- `--foreground`: `16 47% 17%` (marron oscuro `#402116`)
- `--card`: `27 27% 90%` (beige mas claro, para que las cards resalten)
- `--card-foreground`: `16 47% 17%`
- `--primary`: `33 57% 29%` (dorado oscuro `#734E20`)
- `--primary-foreground`: `0 0% 100%` (blanco)
- `--accent`: `16 52% 30%` (rojo ladrillo `#733924`)
- `--accent-foreground`: `0 0% 100%`
- `--muted`: `27 20% 72%` (beige un poco mas oscuro)
- `--muted-foreground`: `11 31% 35%` (marron rosado `#73473D`)
- `--border`: `27 20% 70%`
- `--ring`: `33 57% 29%`
- `--sand`: `27 27% 79%`
- `--mustard`: `33 57% 29%`
- `--crimson`: `16 52% 30%`

**`src/pages/Index.tsx`** - Hero:

- Fondo: `bg-[hsl(16,47%,17%)]` (marron muy oscuro `#402116`)
- Texto blanco, patron de fosiles se mantiene

**`src/components/Footer.tsx`**:

- Fondo: `bg-[hsl(16,47%,17%)]` (mismo marron oscuro)

**`src/pages/QuienesSomos.tsx`**:

- Secciones oscuras: `bg-[hsl(16,47%,17%)]`

### Resultado

- Paleta 100% terrosa y coherente con la tematica arqueologica UNEARTHED
- Tonos calidos de tierra, arcilla y madera en vez de grises y negros
- Mejor armonia visual entre todas las secciones
- Los colores de marca (dorado y rojo ladrillo) resaltan sobre los fondos beige y marron

