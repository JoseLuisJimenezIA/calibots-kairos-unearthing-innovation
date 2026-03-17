

## Plan: Ajustar galería circular — etiquetas de rol y velocidad

### Cambios en `src/pages/QuienesSomos.tsx`

1. **Etiquetas de rol visibles**: Cambiar el texto de los coaches de `"Richard Suarez ⭐"` a `"Richard Suarez — Profesor"` (o "Trainer") para que sea claro su rol. Los estudiantes se muestran solo con su nombre.

2. **Reducir velocidad**: Bajar `autoRotateSpeed` de `0.5` a `0.15` y `scrollSpeed` de `2` a `1` para que el giro automático sea más lento y controlable.

```tsx
// Línea 138 — texto con rol
text: `${m.name}${m.role.includes("Coach") ? " — Profesor" : ""}`

// Líneas 140-144 — velocidades reducidas
scrollSpeed={1}
scrollEase={0.03}
autoRotateSpeed={0.15}
```

### Verificación
- El orden ya es correcto: Richard Suarez primero, Diego Peña segundo (líneas 13-14 del array `teamMembers`).
- La auto-rotación y pausa por interacción ya están implementadas en `CircularGallery.tsx`.
- Solo se ajustan parámetros de velocidad y formato de texto.

