---
title: "Tailwind CSS + Vite Installation Guide"
description: "A comprehensive guide to setting up Tailwind CSS with Vite and React"
pubDate: "2024-01-09"
---


Here's a detailed tutorial for setting up Tailwind CSS with Vite, expanded from the official documentation with complete implementation details:

## Tailwind CSS + Vite Installation Guide

To integrate Tailwind CSS with Vite, follow these structured steps:

**1. Create New Vite Project**  
```bash
npm create vite@latest my-tailwind-app -- --template react-ts
cd my-tailwind-app
```

**2. Install Dependencies**  
```bash
npm install tailwindcss @tailwindcss/vite postcss autoprefixer --save-dev
```

**3. Configure Vite**  
Create/update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
})
```

**4. Set Up Tailwind CSS**  
Create `src/styles/main.css`:
```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Custom CSS */
```

**5. Configure Tailwind (Optional)**  
Generate config file:
```bash
npx tailwindcss init -p
```

**6. Import CSS**  
Update `src/main.tsx`:
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**7. Create Demo Component**  
`src/App.tsx`:
```tsx
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 p-8">
        Tailwind + Vite + React
      </h1>
      <button className="ml-8 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Styled Button
      </button>
    </div>
  )
}
```

**8. Run Development Server**  
```bash
npm run dev
```

## Key Features
- **Zero-Runtime CSS** - Optimized production builds
- **Hot Module Replacement** - Instant style updates
- **PostCSS Integration** - Seamless preprocessing
- **Tree Shaking** - Automatic unused CSS removal

For custom configurations, modify `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6',
      }
    },
  },
  plugins: [],
}
```

This setup provides a modern stack with:
- React 18 + TypeScript
- Tailwind JIT compiler
- PostCSS processing pipeline
- Optimized production builds through Vite

Remember to test your configuration by:
1. Running `npm run build` for production build
2. Serving `dist/` directory to verify output
3. Checking browser console for any build warnings

Citations:
[1] https://tailwindcss.com/docs/installation/using-vite


---
