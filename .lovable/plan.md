

## Cambiar fondo base a beige

### Análisis actual
El fondo base se define a través del CSS variable `--background` en `src/index.css`:
- **Light mode:** `--background: 40 30% 96%` (actualmente muy claro, casi blanco)
- **Dark mode:** `--background: 0 0% 6%` (muy oscuro)

Luego, en el `body` se aplica con `@apply bg-background`, que usa `background: hsl(var(--background))`.

### Solución
Cambiar la variable `--background` en light mode al color **sand/beige** de la paleta (`--sand: 40 30% 80%`), que corresponde a `#D4C5A0`.

**Cambios necesarios:**
1. **src/index.css** – Línea 9:
   - De: `--background: 40 30% 96%;`
   - A: `--background: 40 30% 80%;` (usando los mismos valores que `--sand`)
   
   Esto hará que el fondo base sea beige en light mode sin afectar el dark mode.

### Resultado
- Todas las páginas tendrán un fondo beige elegante y cálido
- El color se alinea con la paleta de marca (sand/arena)
- El dark mode se mantiene sin cambios
- No requiere cambios en otros archivos

