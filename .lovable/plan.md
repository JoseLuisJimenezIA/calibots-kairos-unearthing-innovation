

## Mostrar el favicon (icono de pestaña) con el logo de Calibots Kairos

### Problema
El favicon esta configurado en `index.html` pero apunta a un archivo `favicon.ico` generico. Para que aparezca el logo del equipo en la pestana del navegador, se necesita usar la imagen del logo.

### Solucion
Actualizar `index.html` para usar el archivo `logo.png` como favicon, ya que este si contiene el logo de Calibots Kairos. Tambien se anadira soporte para favicon tipo PNG (mejor compatibilidad con navegadores modernos).

### Cambios necesarios

**index.html** - Reemplazar la linea del favicon:
- De: `<link rel="icon" type="image/x-icon" href="/favicon.ico" />`
- A: `<link rel="icon" type="image/png" href="/logo.png" />`

Esto hara que el logo de Calibots Kairos aparezca como icono en la pestana del navegador.

### Nota
Para mejores resultados (icono nitido en todos los tamanos), se recomienda en el futuro generar un archivo `.ico` a partir del logo en tamanos 16x16, 32x32 y 48x48 pixeles. Pero usar el PNG funciona perfectamente en navegadores modernos.

