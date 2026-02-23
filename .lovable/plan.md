

## Aplicar nueva paleta de colores

Nueva paleta basada en la imagen compartida, con tonos mas variados que incluyen un verde oliva y un mostaza dorado.

### Mapeo de colores

| Hex | HSL | Uso |
|-----|-----|-----|
| `#DCD4C4` | `37 22% 81%` | **Background** - Fondo general (crema calido) |
| `#421C06` | `19 87% 14%` | **Foreground** - Texto principal, Hero, Footer (marron muy oscuro) |
| `#9E780C` | `45 87% 33%` | **Primary** - Color de marca, botones principales (mostaza dorado) |
| `#547550` | `115 20% 39%` | **Secondary** - Acento secundario, badges, detalles (verde oliva) |
| `#8A634C` | `22 29% 42%` | **Accent / Muted-foreground** - Texto secundario, CTA alternativo (marron calido) |

### Cambios

**`src/index.css`** - Variables CSS actualizadas:

- `--background`: `37 22% 81%` (crema `#DCD4C4`)
- `--foreground`: `19 87% 14%` (marron muy oscuro `#421C06`)
- `--card`: `37 22% 91%` (crema mas claro para que las cards resalten)
- `--card-foreground`: `19 87% 14%`
- `--popover` / `--popover-foreground`: mismos que card
- `--primary`: `45 87% 33%` (mostaza dorado `#9E780C`)
- `--primary-foreground`: `0 0% 100%`
- `--secondary`: `115 20% 39%` (verde oliva `#547550`)
- `--secondary-foreground`: `0 0% 100%`
- `--muted`: `37 15% 74%`
- `--muted-foreground`: `22 29% 42%` (marron calido `#8A634C`)
- `--accent`: `22 29% 42%` (marron calido)
- `--accent-foreground`: `0 0% 100%`
- `--border`: `37 15% 72%`
- `--input`: `37 15% 72%`
- `--ring`: `45 87% 33%`
- `--sand`: `37 22% 81%`
- `--teal`: `115 20% 39%` (ahora verde oliva)
- `--mustard`: `45 87% 33%`
- `--crimson`: `22 29% 42%`

**`src/pages/Index.tsx`** - Hero:
- Fondo: `bg-[hsl(19_87%_14%)]` (marron muy oscuro `#421C06`)

**`src/components/Footer.tsx`**:
- Fondo: `bg-[hsl(19_87%_14%)]`

**`src/pages/QuienesSomos.tsx`**:
- Secciones oscuras: `bg-[hsl(19_87%_14%)]`

### Resultado

- Paleta mas rica con 5 tonos distintos incluyendo verde oliva y mostaza dorado
- Mayor variedad cromatica manteniendo la coherencia terrosa/arqueologica
- El verde oliva como secondary agrega frescura sin romper la tematica
- El mostaza dorado como primary da mas impacto que el marron anterior

