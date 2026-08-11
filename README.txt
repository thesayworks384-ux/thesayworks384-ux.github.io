# DibuTech V1

Sitio estático listo para publicar.

## 1. Configura WhatsApp
Abre `script.js` y cambia:

`const WHATSAPP_NUMBER = "52XXXXXXXXXX";`

Por tu número real, sin `+`, espacios ni guiones.

## 2. Edita datos
En `index.html` puedes cambiar:
- correo
- servicios
- textos
- horarios
- nombre de productos

## 3. Publicación gratis con Cloudflare Pages
Puedes subir este proyecto a un repositorio de GitHub y conectarlo a Cloudflare Pages.

Configuración para sitio HTML estático:
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: la carpeta donde esté `index.html` (si subes estos archivos directamente, usa `/` o deja la configuración según el flujo de Cloudflare).

También puedes usar Direct Upload desde Cloudflare Pages.

El sitio no necesita base de datos ni servidor.
