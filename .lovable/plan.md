

## Agregar patron de fosiles al fondo negro del Hero

El usuario quiere que el patron arqueologico de fosiles aparezca en la seccion hero (el fondo negro/oscuro que se ve de primero al entrar al sitio), no en el fondo general del sitio.

### Que se hara

**Archivo: `src/pages/Index.tsx`**

Reemplazar el patron actual de cruces (`+`) en el hero por el patron de fosiles arqueologicos (amonites, huesos, hojas, huellas de dinosaurio), pero en color blanco con baja opacidad para que se vea sutil sobre el fondo negro.

Cambiar el `div` del patron de fondo dentro de la seccion hero (linea 19) para usar el SVG de fosiles en blanco en lugar del patron de cruces actual.

### Detalles
- El patron sera igual al que ya esta en el body pero con color blanco (`%23ffffff`) en vez de negro, para que contraste sobre el fondo oscuro del hero
- Se mantendra la opacidad baja (~5-8%) para que sea sutil
- No se necesitan dependencias nuevas
