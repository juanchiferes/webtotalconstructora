# Total Constructora – sitio web

Sitio institucional estático (HTML + CSS + JS, sin dependencias) para Total Constructora, empresa de mantenimiento de edificios con 30 años de experiencia. Publicado en https://www.totalconstructora.com.ar/.

## Ver el sitio
Abrí `index.html` en el navegador, o servilo con `python3 -m http.server`.

## Personalizar
- **WhatsApp:** constante `WA` al inicio de `js/main.js`, y los links `wa.me` / `tel:` en `index.html`.
- **Instagram:** el link del footer en `index.html` todavía apunta a instagram.com (falta el usuario).
- **Textos y servicios:** `index.html`.
- **Colores y tipografías:** `css/styles.css`. Diseño monocromo con acento rojo `#d92d20`, IBM Plex Sans + IBM Plex Mono (Google Fonts).
- **Logo:** `img/logo.svg` (negro) e `img/logo-blanco.svg`, con el texto en curvas.

## Publicar
GitHub Pages: Settings → Pages → "Deploy from a branch", esta rama y la carpeta `/ (root)`. El archivo `CNAME` fija el dominio `www.totalconstructora.com.ar`.
