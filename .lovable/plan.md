

## Cambiar el fondo del Hero de negro a amarillo/mostaza

### El problema
La sección hero usa `bg-foreground` (negro). El usuario quiere que el fondo sea del color amarillo/mostaza del logo, no negro.

### La solución

**Archivo: `src/pages/Index.tsx`** (línea 16-17)

1. Cambiar `bg-foreground text-background` por un fondo amarillo/mostaza usando `bg-primary text-primary-foreground` (que es el color mostaza de la paleta, `43 78% 45%`)
2. Subir la opacidad del patrón de fósiles de `0.08` a `0.15` para que se note más sobre el fondo mostaza
3. Cambiar el color de los fósiles en el SVG de blanco a negro/marrón oscuro para que contrasten sobre el fondo amarillo

### Resultado
- El hero tendrá fondo amarillo/mostaza como el logo
- El patrón de fósiles será visible en un tono más oscuro sobre el amarillo
- El texto será blanco para buena legibilidad
