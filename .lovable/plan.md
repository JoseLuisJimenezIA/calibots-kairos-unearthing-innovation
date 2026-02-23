

## Fondo amarillo/mostaza con patron de fosiles arqueologicos

### Cambios en el fondo base
Cambiar el color de fondo del sitio de beige (`40 30% 80%`) a un tono amarillo/mostaza que coincida con el fondo del logo. Se usara un tono cercano a `43 78% 45%` (el mostaza de la paleta), pero mas claro para que funcione como fondo sin perder legibilidad. El valor sera aproximadamente `43 65% 75%` -- un amarillo dorado suave.

### Patron de fosiles
Agregar un patron SVG sutil que se repita en todo el fondo con formas arqueologicas:
- Espirales tipo amonite (fosil de caracol marino)
- Hojas fosilizadas
- Huellas de dinosaurio
- Siluetas de huesos

El patron sera en un tono ligeramente mas oscuro que el fondo (~8-10% opacidad) para mantener la legibilidad.

### Detalles tecnicos

**Archivo: `src/index.css`**

1. Cambiar `--background` de `40 30% 80%` a `43 65% 75%` (amarillo mostaza claro)
2. Actualizar `--sand` para que coincida con el nuevo fondo
3. Ajustar `--border` e `--input` para armonizar con el nuevo fondo
4. Agregar `background-image` al `body` con un SVG inline que contenga las formas de fosiles en un tono mostaza mas oscuro con baja opacidad
5. Ajustar `--card` y `--muted` para que contrasten bien con el nuevo fondo

### Resultado esperado
- Fondo amarillo/mostaza dorado que combina con el logo
- Patron sutil de fosiles reforzando la tematica UNEARTHED/arqueologica
- Todo el texto y las cards siguen siendo legibles
- Sin dependencias nuevas ni imagenes externas
