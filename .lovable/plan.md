

## Plan: Asignar fotos PNG a cada integrante en la galería circular

### Archivos a copiar (10 fotos)
Copiar cada imagen subida a `src/assets/team/`:

| Archivo | Integrante |
|---------|-----------|
| `richard.png` | Richard Suarez (Coach) |
| `diego.png` | Diego Peña (Coach) |
| `jose_luis.png` | Jose Luis Jiménez |
| `sebastian.png` | Sebastián Sánchez |
| `monsalve.png` | Samuel Monzalve |
| `gutierrez.png` | Juan E. Gutiérrez |
| `raul1.png` | Raúl A. Castillo |
| `Luisa.png` | Luisa F. Ávila |
| `maria_alejandra.png` | Maria A. Zúñiga |
| `sofia.png` | Sofia Vasco Riaño |

Ericka A. V. Viafara queda sin foto por ahora (se asignara cuando la envies).

### Cambios en `src/pages/QuienesSomos.tsx`

1. Agregar imports de cada imagen desde `@/assets/team/`
2. Actualizar el array `teamMembers` para incluir el campo `avatarUrl` con la imagen importada correspondiente
3. Ericka quedara con `avatarUrl` vacio hasta que se suba su foto

### Sin otros cambios
La galeria circular y las ProfileCards ya estan configuradas para recibir `avatarUrl` -- solo falta asignar las imagenes.

