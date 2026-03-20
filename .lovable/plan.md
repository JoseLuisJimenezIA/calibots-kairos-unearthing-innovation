

## Galería de Evolución ARGOS — V2, V3, V4

### Objetivo
Reemplazar los placeholders de la sección `EvolucionSection` con las imágenes reales del robot ARGOS en sus 3 versiones, cada una con un tratamiento visual distinto.

### Estructura

```text
┌─────────────────────────────────────────────┐
│  EVOLUCIÓN DEL PROTOTIPO                    │
│                                             │
│  ┌─ V2 ─────────────────────────────────┐   │
│  │  Carrusel auto-play + swipe manual   │   │
│  │  6 imágenes, dots + flechas          │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌─ V3 ─────────────────────────────────┐   │
│  │  Imagen única con hover zoom +       │   │
│  │  glow dorado                         │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌─ V4 (Premium) ───────────────────────┐   │
│  │  Carrusel con borde gradient rotate  │   │
│  │  3 imágenes, glow premium, parallax  │   │
│  │  hover                               │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### Implementación

**1. Copiar assets** (10 imágenes → `src/assets/`)
- `argos_v2_1.jpeg` ... `argos_v2_6.jpeg`
- `argos_v3.jpeg`
- `argos_v4.jpeg`, `argos_v4_1.jpeg`, `argos_v4_2.jpeg`

**2. Reescribir `src/components/proyecto/EvolucionSection.tsx`**

Cambiar de layout 2-col (V1/V2 placeholders) a layout vertical con 3 bloques:

- **V2 — Carrusel dinámico**: Usar Embla Carousel (ya instalado, `carousel.tsx` existe). Auto-play con intervalo de 3s, el usuario puede swipe/click flechas. Indicadores de puntos debajo. Animación fade entre slides.

- **V3 — Imagen destacada**: Una sola imagen centrada dentro de glass-card con `overflow-hidden`, efecto `hover:scale-105` con transición suave, y un sutil `drop-shadow` dorado.

- **V4 — Carrusel premium**: Mismo mecanismo Embla pero envuelto en el efecto `animate-border-rotate` (borde gradient giratorio, ya existe en CSS). Cada imagen tiene un overlay gradient sutil. Glow dorado más intenso en hover. Badge "VERSIÓN FINAL" con efecto pulse.

**3. Agregar traducciones** en `LanguageContext.tsx`
- `evo.v3.title` / `evo.v3.desc` y `evo.v4.title` / `evo.v4.desc` en ES/EN/JP

### Efectos interactivos
- Embla auto-scroll con pausa on hover
- Swipe táctil en móvil
- V4: borde con gradient rotante (reutiliza `animate-border-rotate`)
- Framer-motion staggered reveal para cada bloque
- Hover zoom en todas las imágenes

### Archivos modificados
| Archivo | Cambio |
|---|---|
| `src/assets/argos_v2_*.jpeg` (6) | Nuevos assets |
| `src/assets/argos_v3.jpeg` | Nuevo asset |
| `src/assets/argos_v4*.jpeg` (3) | Nuevos assets |
| `src/components/proyecto/EvolucionSection.tsx` | Reescritura completa |
| `src/contexts/LanguageContext.tsx` | Traducciones V3/V4 |

