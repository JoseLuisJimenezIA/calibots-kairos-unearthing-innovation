

## Mejorar la paleta de colores para mejor UI/UX

### Problemas actuales

1. **Todo se ve igual**: El fondo del sitio (`43 55% 75%` arena) y el hero usan practicamente el mismo color, no hay separacion visual
2. **Poco contraste entre secciones**: Las cards (`43 40% 88%`) son muy similares al fondo, se pierden
3. **Salto brusco al negro**: El footer y algunas secciones usan `bg-foreground` (negro puro), creando un contraste muy agresivo
4. **Texto poco legible**: El `muted-foreground` (`0 0% 35%`) sobre el fondo arena no tiene suficiente contraste

### Solucion propuesta

Mantener la identidad de marca (mostaza, teal, arena, rojo) pero ajustar los tonos para crear mas jerarquia visual y mejor legibilidad.

**Archivo: `src/index.css`** - Ajustar las variables CSS:

| Variable | Antes | Despues | Razon |
|----------|-------|---------|-------|
| `--background` | `43 55% 75%` (arena oscuro) | `40 30% 92%` (crema muy claro) | Fondo mas limpio, las cards y secciones resaltan |
| `--foreground` | `0 0% 8%` | `30 10% 15%` (marron muy oscuro) | Texto mas calido, menos agresivo que negro puro |
| `--card` | `43 40% 88%` | `0 0% 100%` (blanco) | Cards blancas que resaltan sobre el fondo crema |
| `--card-foreground` | `0 0% 8%` | `30 10% 15%` | Consistente con foreground |
| `--muted` | `43 35% 82%` | `40 20% 88%` | Mas sutil |
| `--muted-foreground` | `0 0% 35%` | `30 8% 45%` | Mejor contraste para texto secundario |
| `--border` | `43 30% 68%` | `40 15% 82%` | Bordes mas suaves |
| `--sand` | `43 55% 75%` | `40 35% 82%` | Arena mas claro como acento, no como fondo |

**Archivo: `src/pages/Index.tsx`** - Hero con mas presencia:

- Cambiar el hero de `bg-[hsl(43,55%,75%)]` a `bg-[hsl(30,10%,15%)]` (marron muy oscuro, casi negro pero calido)
- Texto blanco (`text-white`) para buen contraste
- Patron de fosiles en blanco con opacidad sutil
- El boton CTA rojo resalta perfecto sobre fondo oscuro

**Archivo: `src/pages/QuienesSomos.tsx`**:
- Cambiar secciones `bg-foreground` a `bg-[hsl(30,10%,15%)]` (mismo marron calido)

**Archivo: `src/components/Footer.tsx`**:
- Cambiar `bg-foreground` a `bg-[hsl(30,10%,15%)]` para consistencia

**Archivo: `src/index.css`** - Quitar el patron de fosiles del body:
- El body tendra fondo crema limpio sin patron
- El patron de fosiles se reserva solo para el hero (ya esta ahi)

### Resultado esperado

- Fondo crema claro y limpio que deja respirar el contenido
- Cards blancas que flotan visualmente sobre el fondo
- Hero oscuro (marron calido) con fosiles como seccion de impacto
- Footer oscuro calido (no negro puro)
- Mejor legibilidad del texto en toda la pagina
- La paleta de marca (mostaza, teal, rojo) resalta mas sobre fondos claros y limpios

