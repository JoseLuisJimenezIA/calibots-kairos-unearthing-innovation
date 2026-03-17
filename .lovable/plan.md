

## Plan: Unificar coaches y estudiantes en una sola galería circular

**Objetivo**: Combinar coaches y estudiantes en una sola `CircularGallery`, con los coaches primero (Richard Suarez, luego Diego Peña) seguidos de los 10 estudiantes. Eliminar la sección separada de Coaches.

### Cambios en `src/pages/QuienesSomos.tsx`

1. **Crear un array unificado** `teamMembers` que combine coaches primero y luego estudiantes, con imágenes placeholder únicas para cada uno.

2. **Actualizar la CircularGallery** (líneas 138-148) para usar el array unificado en lugar de solo `students`.

3. **Eliminar la sección de Coaches** completa (líneas 152-182: el `SectionDivider variant="crimson"` y toda la sección `section-darker` de coaches).

4. **Actualizar el título** de la sección de "Nuestro Equipo" para reflejar que incluye a todos (coaches + estudiantes).

### Orden final en la galería
1. Richard Suarez (Coach)
2. Diego Peña (Coach)
3. Jose Luis Jiménez
4. Sebastián Sánchez
5. ... (resto de estudiantes)

