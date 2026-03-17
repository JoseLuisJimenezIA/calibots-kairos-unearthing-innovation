

## Plan: Optimizar fluidez de la página reduciendo efectos pesados

### Diagnóstico

La página carga **3 contextos WebGL simultáneos** (SplashCursor, Orb, GemPit) + Lenis smooth scroll + múltiples animaciones Framer Motion con `filter: blur()`. Esto causa:

- **GPU saturada**: 3 canvases WebGL compitiendo por recursos
- **CPU ocupada**: SplashCursor ejecuta simulación de fluidos a resolución 1440, GemPit anima 25 partículas, Lenis mantiene RAF loop constante
- **Repaints costosos**: animaciones con `filter: blur()` fuerzan composición pesada en cada frame
- **FCP**: 4.5s (54 scripts en dev mode)

### Cambios propuestos

#### 1. Eliminar GemPit del Index (mayor impacto)
El fondo de partículas WebGL cubre toda la pantalla con `position: fixed` y compite directamente con SplashCursor. Eliminarlo libera un contexto WebGL completo.

**Archivo**: `src/pages/Index.tsx`
- Eliminar import de GemPit y el bloque `<DeferredRender>` que lo envuelve

#### 2. Reducir SplashCursor
Bajar `DYE_RESOLUTION` de 1440 a 512 y `SIM_RESOLUTION` de 128 a 64 para reducir la carga GPU del efecto fluido global.

**Archivo**: `src/App.tsx`
- Pasar props reducidos a `<SplashCursor />`

**Archivo**: `src/components/SplashCursor.tsx`
- Ajustar defaults: `DYE_RESOLUTION = 512`, `SIM_RESOLUTION = 64`

#### 3. Eliminar animaciones con blur en Framer Motion
Los `filter: "blur(Xpx)"` en las variantes de animación causan repaints costosos en cada frame de transición.

**Archivo**: `src/lib/animations.ts`
- Quitar `filter: "blur(...)"` de `slideFromLeft`, `slideFromRight`, `scaleReveal`, `staggerItem`

**Archivo**: `src/pages/Index.tsx`
- Quitar `filter: "blur(Xpx)"` de las animaciones inline del hero

#### 4. Reducir Orb del hero
Bajar el tamaño del contenedor de 500x500 a 350x350 para reducir píxeles renderizados por el shader.

**Archivo**: `src/pages/Index.tsx`
- Cambiar dimensiones del div contenedor del Orb

#### 5. Eliminar Lenis de ScrollStack
Lenis agrega un RAF loop constante para smooth scroll que compite con los demás loops de animación. El scroll nativo del navegador es suficiente.

**Archivo**: `src/components/ScrollStack.tsx`
- Reemplazar Lenis por un simple `scroll` event listener nativo con `requestAnimationFrame` throttling

#### 6. Eliminar scan line animation del hero
La animación CSS infinita del scan line fuerza repaints continuos.

**Archivo**: `src/pages/Index.tsx`
- Eliminar el bloque de la línea de escaneo animada

### Resultado esperado
- De 3 contextos WebGL a 2 (SplashCursor + Orb)
- GPU ~40% más libre por reducción de resoluciones y eliminación de GemPit
- Sin animaciones con blur filter (elimina repaints costosos)
- Sin RAF loop de Lenis
- Scroll y navegación notablemente más fluidos

