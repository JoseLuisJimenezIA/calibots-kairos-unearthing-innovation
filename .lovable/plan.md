

## Plan: Agregar botón "Volver" en todas las páginas

### Enfoque
Crear un componente reutilizable `BackButton` que use `useNavigate(-1)` de React Router para volver a la página anterior. Se colocará debajo del `Navbar` en todas las páginas excepto la de Inicio (`Index`).

### Componente nuevo
- **`src/components/BackButton.tsx`**: Botón con icono `ArrowLeft` de Lucide, estilizado con la paleta del sitio, posicionado al inicio del contenido.

### Páginas a modificar
Importar y agregar `<BackButton />` justo después de `<Navbar />` en:
- `QuienesSomos.tsx`
- `ProyectoInnovador.tsx`
- `JuegoDelRobot.tsx`
- `Galeria.tsx`
- `Contacto.tsx`
- `ValorFIRST.tsx`
- `NotFound.tsx`

**No** se agrega en `Index.tsx` (es la página principal).

