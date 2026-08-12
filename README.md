# 🎮 Scratch Arcade — Netlify V2

Versión sin Firebase. Usa **Netlify Functions + Netlify Blobs**.

## Funciones

- Subir `.sb3`
- Listar juegos
- Descargar proyectos
- Abrirlos con TurboWarp
- Todo alojado dentro de Netlify

## Publicar

1. Subí todo este contenido a tu repositorio de GitHub.
2. Tu proyecto de Netlify ya está conectado a ese repositorio.
3. Hacé commit/push.
4. Netlify instalará las dependencias y desplegará las Functions automáticamente.

No necesitás `firebase-config.js`.

## Límite

Esta versión limita cada proyecto a **5 MB** porque la subida pasa por una Netlify Function. Si querés aceptar proyectos más grandes, podemos hacer una V3 con un sistema de subida diferente.

## Importante

Esta V2 está pensada como una sala sencilla para vos y tus amigos. No tiene cuentas ni permisos individuales todavía: cualquiera que tenga el enlace puede ver los juegos y subir proyectos.

La reproducción usa TurboWarp con `project_url`.
