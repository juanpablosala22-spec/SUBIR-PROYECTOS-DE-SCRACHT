# 🎮 Scratch Arcade

Una pequeña plataforma para compartir proyectos de Scratch (`.sb3`) con amigos.

## ✨ Funciones

- ⬆️ Subir proyectos `.sb3`
- ▶️ Jugar proyectos desde la web mediante TurboWarp
- ⬇️ Descargar proyectos
- 👥 Ver los proyectos de todos los usuarios
- 👤 Nombre de usuario local
- 🗑️ Borrar tus propios proyectos
- 📱 Diseño adaptable para celular y PC
- ☁️ Firebase para almacenamiento y base de datos
- 🚀 Preparado para desplegar en Netlify

> Este proyecto no es oficial de Scratch.

---

## 📁 Estructura

```text
scratch-arcade/
├── index.html
├── firebase-config.js
├── firestore.rules
├── storage.rules
├── netlify.toml
├── .gitignore
└── README.md
```

---

# 🔥 Configurar Firebase

La web necesita Firebase para guardar los proyectos y compartirlos entre dispositivos.

### 1. Crear el proyecto

Entrá a Firebase Console y crea un proyecto.

Después:

- Agregá una aplicación **Web**
- Copiá el objeto `firebaseConfig`
- Pegalo en `firebase-config.js`

### 2. Authentication

En Firebase:

**Authentication → Sign-in method → Anonymous → Enable**

Esto permite que los usuarios entren sin crear una cuenta.

### 3. Firestore

Creá una base de datos de Firestore.

Después copiá el contenido de:

```text
firestore.rules
```

en las reglas de Firestore.

### 4. Storage

Activá Firebase Storage.

Copiá:

```text
storage.rules
```

en las reglas de Storage.

---

# 🌐 Subir a GitHub

Creá un repositorio, por ejemplo:

```text
scratch-arcade
```

Luego, desde esta carpeta:

```bash
git init
git add .
git commit -m "Primer lanzamiento de Scratch Arcade"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/scratch-arcade.git
git push -u origin main
```

También podés subir los archivos directamente desde la página de GitHub.

---

# 🚀 Conectar con Netlify

En Netlify:

1. Elegí **Add new project**
2. Elegí **Import an existing project**
3. Seleccioná GitHub
4. Elegí `scratch-arcade`
5. Netlify detectará `netlify.toml`
6. Publicá el sitio

No necesita un comando de build.

La carpeta que se publica es:

```text
.
```

Después de cada:

```bash
git push
```

Netlify volverá a desplegar automáticamente la nueva versión.

---

# ⚠️ Sobre firebase-config.js

La configuración de una aplicación web de Firebase puede estar en el frontend. Lo importante es que **Firestore y Storage estén protegidos mediante sus reglas de seguridad**.

No pongas contraseñas, claves privadas, tokens secretos ni credenciales de servidor en este repositorio.

---

# 🛠️ Próximas mejoras posibles

- 🔎 Buscador
- 🖼️ Miniaturas de juegos
- ❤️ Likes
- 💬 Comentarios
- 🏷️ Categorías
- ⭐ Favoritos
- 👤 Perfiles
- 🔐 Código privado para invitar amigos
- 📊 Contador de visitas/descargas
- 🕹️ Página individual para cada juego
- 🏆 Ranking de juegos
