

## Plan: Rediseño 3D Futurista con LEGO Explorer

### Concepto
Transformar toda la interfaz al estilo del sitio TRONIX-5 (fondos oscuros, grid lines, glassmorphism, gradientes futuristas) manteniendo la paleta CaliBots pero en versión "hyperfuturista" con degradados. El muñeco LEGO explorador será el protagonista visual en el Hero, mostrado como imagen con efectos 3D (glow, sombras, escala) ya que un modelo 3D real requeriría assets .glb que no tenemos.

### Paleta transformada
- **Fondo principal**: Negro profundo / dark-brown ultra oscuro (`#0A0806`, `#141210`)
- **Gradientes futuristas**: Mostaza→Ámbar (`#E3B03F→#F5D060`), Verde fósil→Cyan (`#6E8B78→#7FFFCF`), Rojo mineral→Naranja (`#C63D2F→#FF6B4A`)
- **Glassmorphism**: Bordes semi-transparentes, backdrop-blur, bg con alpha bajo
- **Grid pattern**: Líneas sutiles estilo tech sobre fondos oscuros

### Cambios por archivo

#### 1. `src/index.css` — Nueva paleta oscura futurista
- Background principal ultra oscuro
- Cards con glassmorphism (bg semi-transparente)
- Nuevos CSS custom properties para gradientes
- Grid pattern CSS reutilizable

#### 2. `src/assets/lego-explorer.png` — Copiar imagen del LEGO
- La imagen uploaded se copia al proyecto

#### 3. `src/components/Navbar.tsx` — Navbar futurista
- Fondo negro con glassmorphism, borde inferior con gradiente sutil
- Tipografía uppercase tracking-widest
- Hover con glow en color primario

#### 4. `src/pages/Index.tsx` — Hero 3D completo
- Fondo negro con grid lines animadas
- LEGO explorer centrado con efecto glow, shadow masivo, ligera animación float
- Texto con gradiente futurista
- CTAs con bordes glow y hover luminoso
- Cards con glassmorphism (border rgba, backdrop-blur)
- Sección "Cómo vivimos FLL" con cards glass sobre fondo oscuro

#### 5. `src/components/Footer.tsx` — Footer oscuro futurista
- Mismo estilo glass, grid background sutil

#### 6. `src/components/proyecto/HeroSection.tsx` — Hero proyecto con estilo dark
- Gradiente futurista, tipografía bold con text-gradient

#### 7. Secciones de ProyectoInnovador — Fondo oscuro alternado
- Secciones alternan entre negro puro y negro con grid
- Cards con glassmorphism
- Iconos con glow

#### 8. `src/pages/QuienesSomos.tsx` — Misma transformación dark/glass
- Member cards con glassmorphism
- Timeline con glow points

#### 9. Demás páginas (`Galeria`, `Contacto`, `JuegoDelRobot`) — Estilo consistente
- Aplicar fondo oscuro, glass cards, gradientes en títulos

### Enfoque técnico
- Sin three.js — se usa la imagen del LEGO con CSS 3D transforms, box-shadow con glow, y animación float con framer-motion para simular profundidad 3D
- Nuevas clases utilitarias en index.css: `.glass-card`, `.grid-bg`, `.text-gradient`, `.glow`
- Se mantiene la estructura de componentes existente, solo cambia el styling

### Resultado visual
Toda la web pasa de tonos arena/tierra claros a un estilo oscuro premium futurista con el LEGO explorer como mascota central, gradientes neón sobre fondos negros, y efecto de profundidad 3D en toda la interfaz.

