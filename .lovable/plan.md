

## Plan: Arreglar Dock y quitar efecto del logo

### Problemas identificados
1. **El Dock se "traba"** — El contenedor exterior (`dock-outer`) tiene una altura animada que cambia entre `panelHeight` y `maxHeight` (256px), causando que todo el layout salte/se trabe cuando el mouse entra y sale.
2. **El logo de abajo tiene el efecto Dock** — El segundo `Dock` con los logos no debería tener el efecto de magnificación.

### Cambios

**`src/components/Dock.tsx`**
- Eliminar la animación de altura del contenedor exterior (`dock-outer`). Usar una altura fija que acomode la magnificación sin mover el layout. Esto evita el "traba" de entrar/salir.
- Cambiar `align-items: center` a `align-items: flex-end` en el outer para que los items crezcan hacia arriba.

**`src/components/Dock.css`**
- Ajustar `.dock-outer` con `align-items: flex-end` y overflow visible para que la magnificación vaya hacia arriba sin mover el contenedor.

**`src/components/Footer.tsx`**
- Quitar el segundo `<Dock>` de logos y reemplazarlo con HTML estático: los dos logos (imagen + texto FLL) mostrados con flex, sin efecto de magnificación ni animación. Mantener el estilo visual coherente (fondo oscuro, borde dorado sutil).

