# Commands

* `npm run dev` - Start development server
* `npm run build` - Build for production (runs type checking first)
* `npm run preview` - Preview production build locally
* `npm run astro` - Run Astro CLI commands

# Code Style Guidelines

* **Framework**: Astro with React components (.astro and .tsx files)
* **Formatting**: Follow existing code style (spaces, line breaks)
* **Naming**: PascalCase for components, camelCase for variables/functions
* **TypeScript**: Use strict type checking, avoid `any` unless necessary
* **CSS**: Use Tailwind utility classes, centralize theme variables in theme.ts
* **Content**: Markdown files in src/pages with frontmatter for metadata
* **Imports**: Group imports (React, Astro, utils, components, styles)
* **Error Handling**: Use try/catch blocks for async operations
* **Components**: Keep them small, focused, and reusable
* **Theme**: Support for both light (Solarized) and dark (Night Owl) modes