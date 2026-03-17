

## Plan: Ajustar colores del Orb a la paleta CaliBots (dorado/ámbar)

### Problema
El `hue={35}` solo rota los colores base del shader (púrpura y cian), lo que produce tonos azul-verdosos en lugar del dorado CaliBots deseado. Una simple rotación de hue no puede convertir púrpura en dorado de forma precisa.

### Solución
Modificar directamente los **colores base del shader GLSL** en `src/components/Orb.tsx` para usar la paleta CaliBots:

- `baseColor1`: cambiar de púrpura `(0.612, 0.263, 0.996)` → dorado `(0.784, 0.588, 0.176)` (~`#C8962D`, el primary de CaliBots)
- `baseColor2`: cambiar de cian `(0.298, 0.761, 0.914)` → ámbar claro `(0.933, 0.745, 0.302)` (~`#EFBE4D`)
- `baseColor3`: cambiar de azul oscuro `(0.063, 0.078, 0.600)` → marrón oscuro `(0.180, 0.120, 0.040)` (~el fondo CaliBots)

También poner `hue={0}` en `Index.tsx` ya que los colores base ya serán correctos y no necesitan rotación.

### Archivos a modificar
1. **`src/components/Orb.tsx`** — Cambiar las 3 constantes `baseColor` en el fragment shader
2. **`src/pages/Index.tsx`** — Cambiar `hue={35}` a `hue={0}`

