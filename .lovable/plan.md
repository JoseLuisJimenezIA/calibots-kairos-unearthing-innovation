

## Actualizar logo y favicon con la nueva imagen (fondo transparente)

El usuario quiere reemplazar el logo actual (`logo.png`) con la nueva imagen que tiene fondo transparente. Este logo se usa en tres lugares:

1. **Favicon** (icono de pestana del navegador) - referenciado en `index.html`
2. **Navbar** - logo en la barra de navegacion
3. **Footer** - logo en el pie de pagina
4. **Hero de la pagina de inicio** - logo grande animado

### Cambios necesarios

**Paso 1 - Copiar la imagen al proyecto:**
- Copiar `user-uploads://CALIBOTSLOGO1_20260216_142201_0000.png` a `public/logo.png` (reemplazando el actual)

Esto automaticamente actualiza todos los lugares donde se usa `/logo.png`:
- `index.html` (favicon)
- `Navbar.tsx` (logo en navegacion)
- `Footer.tsx` (logo en footer)
- `Index.tsx` (hero)

No se necesitan cambios en codigo, solo reemplazar el archivo.

### Resultado
- El nuevo logo con fondo transparente aparecera en la navegacion, hero, footer y como favicon
- El fondo transparente se integrara mejor con el fondo beige del sitio
