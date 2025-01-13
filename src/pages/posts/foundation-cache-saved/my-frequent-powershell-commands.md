---
layout: ../../../layouts/BlogPost.astro
title: "My Frequent Powershell Command"
description: ""
pubDate: "2025-01-09"
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"

---

## Table of Contents
- [Project Creation](#project-creation)
- [Tailwind Configuration](#tailwind-configuration)
- [PostCSS Configuration](#postcss-configuration)
- [CSS Structure](#css-structure)
- [Main Application Setup](#main-application-setup)
- [VSCode Extensions](#vscode-extensions)
- [VSCode Settings](#vscode-settings)
- [Package Configuration](#package-configuration)
- [Project Rebuild](#project-rebuild)



## Project Creation
First, let's create a new React TypeScript project using Vite and install the necessary dependencies:

```bash
# Create new Vite project
npm create vite@latest app-name -- --template react-ts

# Navigate into the project directory
cd app-name

# Install dependencies
npm install

# Install Tailwind and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind configuration
npx tailwindcss init -p
```

## Tailwind Configuration
Create and configure the Tailwind CSS settings:

```powershell
# Create configuration file
New-Item -ItemType File -Path "tailwind.config.js" -Force
```

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          // ... (rest of the color configuration)
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}
```

## PostCSS Configuration
Set up PostCSS for processing CSS:

```powershell
# Create PostCSS config file
New-Item -ItemType File -Path "postcss.config.js" -Force
```

```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
```

Let me continue with the reorganization...

4. For the CSS structure section:

```markdown
## CSS Structure
Set up the main CSS file with Tailwind directives and custom utilities:

```powershell
# Remove old styles directory
Remove-Item -Path "src/styles" -Recurse -Force

# Create new index.css
New-Item -ItemType File -Path "src/index.css" -Force
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors duration-200;
  }
  
  .btn-primary {
    @apply btn bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800;
  }
  
  .input {
    @apply px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200;
  }
}
```

## Main Application Setup
Update the main entry point to use the new CSS configuration:

```typescript
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

## VSCode Extensions
Install the following essential VSCode extensions for optimal development experience:

```powershell
# Install via VSCode Quick Open (Ctrl+P)
ext install bradlc.vscode-tailwindcss
ext install csstools.postcss
```

## VSCode Settings
Configure VSCode for the best development experience:

```powershell
# Create VSCode settings directory and file
New-Item -ItemType Directory -Path ".vscode" -Force
New-Item -ItemType File -Path ".vscode/settings.json" -Force
```

```json
{
  "css.validate": false,
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.includeLanguages": {
    "typescriptreact": "html"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.associations": {
    "*.css": "postcss"
  }
}
```

## Package Configuration
Ensure your `package.json` includes all necessary dependencies and scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@headlessui/react": "^1.7.17",
    "@heroicons/react": "^2.0.18",
    "clsx": "^2.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

## Project Rebuild
Finally, rebuild the project with the new configuration:

```powershell
# Clean install dependencies
Remove-Item -Path "node_modules" -Recurse -Force
npm cache clean --force
npm install

# Start development server
npm run dev
```


```powershell
npm cache clean --force
Remove-Item -Path .\node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path .\package-lock.json -Force -ErrorAction SilentlyContinue
npm install

```