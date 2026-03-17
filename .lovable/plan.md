

## Plan: Hacer las gemas del GemPit mas realistas

### Cambios en `src/components/GemPit.tsx`

**1. Geometria mas realista — forma de diamante tallado**
- Reemplazar `OctahedronGeometry(1, 0)` por una geometria compuesta: un cono superior (corona) + cono inferior invertido (pabellon), simulando un corte "brilliant cut". Se construira con `ConeGeometry` combinados via `BufferGeometryUtils.mergeGeometries`, o alternativamente usar `IcosahedronGeometry(1, 1)` con escalado no-uniforme en Y para aplanar y dar forma de gema.
- Opcion mas simple y efectiva: usar `OctahedronGeometry(1, 2)` (mas subdivisiones) con escala no-uniforme `(1, 0.6, 1)` para aplanar, dando aspecto de gema pulida.

**2. Material mas realista**
- Aumentar `transmission: 0.8` (mas transparente/cristalino)
- Aumentar `ior: 2.42` (indice de refraccion del diamante real)
- Agregar `thickness: 1.5` (mas profundidad de refraccion)
- Reducir `metalness: 0.05` (gemas reales no son metalicas)
- Agregar `specularIntensity: 1` y `specularColor: 0xffffff`
- Reducir `roughness: 0.02` (superficie ultra-pulida)
- Agregar `attenuationDistance: 0.5` y `attenuationColor` (color de absorcion interna) que cambie segun esmeralda/rubi

**3. Iluminacion mejorada**
- Agregar una segunda `PointLight` desde otro angulo para crear mas reflejos/destellos
- Aumentar `lightIntensity` a 300
- Agregar `DirectionalLight` suave para brillos consistentes

**4. Rotacion mas organica**
- Agregar rotacion individual almacenada por gema (velocidad angular aleatoria) en vez de derivarla de la posicion, para movimiento mas natural

**5. Escala no-uniforme por gema**
- Variar la proporcion X/Y/Z ligeramente por cada instancia para que no todas las gemas se vean identicas

### Archivos a modificar
- `src/components/GemPit.tsx` — todos los cambios descritos arriba

