# 📋 QuickList

**QuickList** est une application web de gestion de listes, construite avec React, Vite, et une API Spring Boot. Elle permet aux utilisateurs de créer et gérer des listes personnalisées, avec une authentification sécurisée via JWT.

## 🚀 Stack Technique

### Frontend
- ⚡ [Vite](https://vitejs.dev/) — Build tool ultra-rapide
- ⚛️ [React](https://reactjs.org/) — Librairie pour construire des interfaces utilisateur
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — Framework CSS utilitaire
- 💡 [Flowbite](https://flowbite.com/) — Composants UI pour Tailwind
- 🔌 [Axios](https://axios-http.com/) — Client HTTP pour les requêtes API

### Backend
- ☕ [Spring Boot](https://spring.io/projects/spring-boot) — Framework Java pour l’API REST
- 🔐 Authentification JWT avec Bcrypt
- 🗃️ Base de données : MariaDB

---

## 📁 Architecture Frontend



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
