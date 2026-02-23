

## Cambiar el fondo del Hero al color arena/beige claro

El hero actualmente usa `bg-primary` (mostaza fuerte, `43 78% 45%`). Lo cambiaremos al color arena mas claro que ya existe en la paleta.

### Cambio

**Archivo: `src/pages/Index.tsx`** (linea 16)

- Cambiar `bg-primary text-primary-foreground` por `bg-[hsl(43,55%,75%)] text-foreground`
- Esto usara el color arena/beige claro (`#D4C5A0`) que es el fondo base del sitio pero mas suave y claro que el mostaza
- El texto pasara a ser oscuro (`text-foreground`) para buena legibilidad sobre el fondo claro
- El patron de fosiles se mantiene igual (negro con baja opacidad, ya contrasta bien sobre fondo claro)

