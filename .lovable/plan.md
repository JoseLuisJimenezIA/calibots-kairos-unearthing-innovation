

## Actualización completa del sitio CaliBots Kairos

Este es un cambio grande que abarca paleta de colores, tipografía, contenido real y nuevas secciones. Se divide en bloques para mantener claridad.

---

### 1. Nueva paleta de colores (`src/index.css`)

| Hex | HSL | Variable |
|-----|-----|----------|
| `#E3B03F` | `40 76% 57%` | `--primary` (mostaza arqueológica) |
| `#D8B36A` | `37 56% 63%` | `--background` (arena/piedra) |
| `#5C5A54` | `30 4% 35%` | `--muted-foreground` (roca) |
| `#3A2E1F` | `29 32% 17%` | `--foreground`, `--dark-brown` (tierra profunda) |
| `#6E8B78` | `144 12% 49%` | `--secondary` (verde fósil) |
| `#C63D2F` | `5 63% 48%` | `--destructive` / `--accent` (rojo mineral, para botones CTA) |

Variables derivadas: card (arena mas claro), muted (arena grisácea), border, etc.

### 2. Tipografía (`src/index.css` + `tailwind.config.ts`)

Agregar Poppins e Inter al import de Google Fonts. Mapear:
- `font-heading`: Montserrat (ya existe)
- `font-subtitle`: Poppins SemiBold (nueva)
- `font-body`: Inter Regular (reemplaza Open Sans)

### 3. Contenido de "Quiénes Somos" (`src/pages/QuienesSomos.tsx`)

- Reemplazar texto placeholder con el contenido real del equipo
- Actualizar array `teamMembers` con los 10 estudiantes + 2 profesores reales
- Separar visualmente profesores de estudiantes
- Mantener estructura de tarjetas con foto placeholder

### 4. Proyecto Innovador - ARGOS (`src/pages/ProyectoInnovador.tsx`)

Reescritura completa del contenido manteniendo la estructura de secciones:
- Hero: "ARGOS" como nombre del proyecto
- Descripción: espeleología + robot explorador
- Significado del nombre (Argos mitológico + Kairos)
- Objetivo general y específicos
- Problemáticas (cultural, económica, seguridad, tecnológica)
- Nueva sección: **Evolución del robot** (V1, V2 con placeholders)
- Nueva sección: **Tecnología** (sensor MQ-7, Arduino/Raspberry Pi)
- Nueva sección: **Avances** (línea de tiempo semanas 1-14)

### 5. Galería - filtros actualizados (`src/pages/Galeria.tsx`)

Cambiar filtros de `["Todo", "Proyecto", "Equipo", "Registros", "Juego del Robot"]` a `["Todo", "Proyecto", "Equipo", "Robot", "Competencia", "Investigación"]` y actualizar items.

### 6. Index - Hero actualizado (`src/pages/Index.tsx`)

Actualizar textos para reflejar ARGOS y espeleología. Cambiar botón CTA a rojo mineral (`bg-accent`). Mantener patrón de fósiles.

### 7. Footer y Navbar

Sin cambios estructurales, solo absorben la nueva paleta via CSS variables.

### 8. Animaciones suaves

Ya existen via framer-motion `fadeUp`. Se agregarán transiciones hover a botones (`transition-all duration-300 hover:scale-105 hover:shadow-lg`).

---

### Archivos a modificar

| Archivo | Cambios |
|---------|---------|
| `src/index.css` | Paleta completa + tipografías |
| `tailwind.config.ts` | font-subtitle (Poppins), font-body (Inter) |
| `src/pages/Index.tsx` | Textos Hero, botón CTA rojo |
| `src/pages/QuienesSomos.tsx` | Contenido real, 12 integrantes |
| `src/pages/ProyectoInnovador.tsx` | Contenido ARGOS completo + secciones nuevas |
| `src/pages/Galeria.tsx` | Filtros actualizados |
| `src/pages/JuegoDelRobot.tsx` | Mejoras menores de texto |

