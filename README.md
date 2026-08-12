# 🎮 Scratch Arcade — Netlify V2

Versión sin Firebase. Usa **Netlify Functions + Netlify Blobs**.

### V4: listado y aparición inmediata de juegos
La lista obtiene los metadatos de cada blob con `getMetadata()`, porque `list()` devuelve claves/ETags y no los metadatos del objeto. Además, la página reintenta cargar la lista después de una subida para compensar la consistencia eventual de Netlify Blobs.

### V3: compatibilidad con Netlify Functions v1
Las Functions llaman `connectLambda(event)` para inicializar correctamente el contexto de Netlify Blobs antes de usar el store.

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
