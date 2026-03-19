

## Sección interactiva "Portal ARGOS" en Proyecto Innovador

### Objetivo
Crear una sección visualmente impactante dentro de la página Proyecto Innovador que sirva como portal/hipervínculo hacia la web externa de ARGOS (https://argoss.lovable.app). La sección combinará efectos existentes del proyecto para crear una experiencia inmersiva.

### Diseño visual

La sección será un bloque full-width con fondo oscuro premium que incluye:

1. **Fondo con ShapeBlur** -- el componente WebGL ya existente en el proyecto, renderizado como fondo con efecto reactivo al mouse
2. **Partículas/líneas doradas animadas** -- usando gradientes CSS animados y pseudo-elementos
3. **Card central tipo "portal"** -- con glass-card, borde animado con glow dorado pulsante, y el logo de ARGOS
4. **Texto animado** -- título "ARGOS — Plataforma de Monitoreo" con efecto textReveal de framer-motion
5. **Botón CTA principal** -- enlace externo con efecto hover glow y animación de flecha, abre en nueva pestaña
6. **Efecto de "conexión"** -- líneas SVG animadas que conectan visualmente CaliBots con ARGOS

```text
┌─────────────────────────────────────────────┐
│  ░░░░░░░ ShapeBlur background ░░░░░░░░░░░  │
│                                             │
│     ╔═══════════════════════════════╗       │
│     ║  ⚡ CALIBOTS × ARGOS         ║       │
│     ║                               ║       │
│     ║  Plataforma de Monitoreo      ║       │
│     ║  Ambiental Científico         ║       │
│     ║                               ║       │
│     ║  [🔗 Explorar ARGOS →]        ║       │
│     ╚═══════════════════════════════╝       │
│                                             │
└─────────────────────────────────────────────┘
```

### Implementación técnica

**Archivo nuevo**: `src/components/proyecto/ArgosPortalSection.tsx`
- Importa `ShapeBlur` (lazy loaded) como fondo WebGL interactivo
- Usa animaciones de framer-motion existentes: `textReveal`, `scaleReveal`, `flipIn`
- Card con borde animado gradient (keyframe CSS rotate)
- Botón `<a href="https://argoss.lovable.app" target="_blank">` con hover glow-gold
- Iconos de Lucide: `ExternalLink`, `Radar`, `Cpu`
- Traducciones ES/EN/JP via `useLanguage()`

**Archivo modificado**: `src/pages/ProyectoInnovador.tsx`
- Insertar `<ArgosPortalSection />` entre TecnologiaSection y JuegoSection (posición lógica: después de hablar de tecnología, antes del juego)

**Archivo modificado**: `src/contexts/LanguageContext.tsx`
- Agregar traducciones para la nueva sección en los 3 idiomas (`argos.badge`, `argos.title`, `argos.subtitle`, `argos.desc`, `argos.cta`)

**Archivo modificado**: `src/index.css`
- Agregar keyframe `@keyframes border-rotate` para el efecto de borde giratorio con gradient

### Efectos interactivos incluidos
- ShapeBlur WebGL reactivo al mouse como fondo
- Borde con gradient rotante (CSS animation)
- Glow pulsante dorado en hover
- Framer-motion: reveal escalonado de elementos
- Botón con scale + glow en hover
- Partículas decorativas con pseudo-elementos animados

