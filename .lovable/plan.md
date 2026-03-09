

## Plan: Agregar contenido faltante al Proyecto Innovador

### Resumen
La página de Proyecto Innovador ya tiene estructura pero le faltan secciones completas de contenido proporcionado por el usuario. Se agregarán todas las secciones faltantes manteniendo el diseño existente.

### Cambios en `src/pages/ProyectoInnovador.tsx`

**Secciones nuevas a agregar:**

1. **Justificación** — Bloque completo con el texto sobre herramientas tecnológicas accesibles en minería pero no en arqueología, y cómo ARGOS aporta desde la tecnología.

2. **Problemáticas expandidas** — Reemplazar las descripciones de una línea por los textos completos:
   - Cultural: desafío ético de sitios sagrados
   - Económico: inversión vs retribución
   - Seguridad: materiales poco rígidos, gases, precipitaciones
   - Tecnológico: LIDAR, Georradar, retroalimentación háptica, interoperabilidad

3. **Problemas de la minería** — Subsección con desertización, erosión, cambio de relieve, etc.

4. **Excavaciones en cueva** — Riesgos: derrumbes, caídas, atmósferas peligrosas.

5. **Espeleología** — Definición completa con etimología griega y conexión con geomorfología/hidrogeología.

6. **Paleontología** — Sección sobre fósiles como archivos del pasado, evolución, climas antiguos.

7. **Impacto Social** — Texto sobre cómo la arqueología ayuda a conocer el pasado, conservar patrimonio y generar turismo.

8. **Casos reales de problemática arqueológica** — Tres tarjetas:
   - Tumba de Tutankamón (Egipto): humedad, hongos, deterioro
   - Pompeya (Italia): intemperie, turismo masivo, colapsos
   - Machu Picchu (Perú): cambio climático, turismo masivo

9. **Timeline expandido** — Agregar descripciones detalladas para cada semana (1-10, 14) con el contenido proporcionado. Semanas 11-13 marcadas como "Pendiente".

10. **Tecnología expandida** — Agregar detalles sobre oxímetro, sensor electroquímico MQ-7, conexión con Raspberry Pi, y por qué se descartó el sensor óptico.

### Sin cambios en
- `QuienesSomos.tsx` — ya tiene todo el contenido del usuario
- `Index.tsx` — no requiere cambios
- Orden de estudiantes se mantiene (Jose Luis primero por indicación previa)

### Enfoque técnico
- Mismo patrón de componentes: `motion.div`, `fadeUp`, `Card`, `PhotoPlaceholder`
- Secciones alternadas con fondo `bg-muted/50` y fondo blanco
- Iconos de Lucide para cada sección
- Tarjetas para los casos reales (Egipto, Italia, Perú)

