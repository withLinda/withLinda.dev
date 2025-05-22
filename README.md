# withLinda.dev Blog Template

A modern, fast, and customizable blog template built with Astro, React, and Tailwind CSS. This template features a beautiful dual-theme design with Solarized Light and Night Owl Dark modes, responsive layout, and optimized performance.

## ✨ Features

- ⚡️ **Blazing Fast** - Built with Astro for optimal performance and smaller bundle sizes
- 🎨 **Beautiful Design** - Clean and modern styling with Tailwind CSS
- 🌙 **Dual Theme** - Seamless switching between Solarized Light and Night Owl Dark themes
- 📱 **Fully Responsive** - Mobile-first approach with adaptive layout
- 📋 **Code Highlighting** - Syntax highlighting with copy button functionality
- 📝 **Markdown & MDX Support** - Write content in Markdown or MDX with components
- 🗂️ **Category Organization** - Posts automatically organized by folder structure
- 🔍 **SEO Optimized** - Built-in meta tags and sitemap generation
- 🔒 **TypeScript** - Type-safe code with TypeScript
- 📊 **Zero JS by default** - Astro's partial hydration for optimal performance

## 📱 Screenshots

### Light Mode (Solarized Light Theme)
<img src="screenshots/paper-light-mode.png" alt="Blog in Light Mode" width="600" />

### Dark Mode (Night Owl Theme)
<img src="screenshots/nightowl-dark-mode.png" alt="Blog in Dark Mode" width="600" />

Both themes are fully responsive and optimized for mobile viewing, providing an excellent reading experience on any device.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Basic knowledge of React, Astro, and Tailwind CSS

### Installation

1. Clone this repository:
```bash
git clone https://github.com/withLinda/withLinda.dev.git my-blog
cd my-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📂 Project Structure

```
/
├── public/             # Static assets
│   └── favicon.svg     # Site favicon
├── src/
│   ├── components/     # UI Components
│   │   ├── BaseHead.astro    # Common head elements
│   │   ├── Body.astro        # Body wrapper with theme classes
│   │   ├── Content.astro     # Content container
│   │   ├── CopyCodeButton.astro  # Code copy functionality
│   │   ├── Footer.astro      # Site footer
│   │   ├── Header.astro      # Site header
│   │   ├── MobileMenu.tsx    # Mobile navigation
│   │   └── ThemeToggleButton.tsx  # Theme switcher
│   ├── layouts/        # Page layouts
│   │   └── BlogPost.astro    # Blog post template
│   ├── pages/          # Page routes
│   │   ├── posts/      # Blog posts
│   │   │   ├── category-name/  # Posts organized by category
│   │   │   └── ...
│   │   ├── about.md    # About page
│   │   └── index.astro # Home page
│   ├── styles/         # Global styles
│   │   ├── global.css  # Global CSS
│   │   └── theme.ts    # Theme configuration
│   └── config.ts       # Site configuration
├── astro.config.mjs    # Astro configuration
├── tailwind.config.cjs # Tailwind configuration
└── package.json        # Project dependencies
```

## 📝 Creating Content

### Adding a New Blog Post

1. Create a new Markdown or MDX file in `src/pages/posts/[category-name]/`:

```md
---
layout: "../../../layouts/BlogPost.astro"
title: "Your Post Title"
description: "Brief description of your post"
pubDate: "2025-01-21"
heroImage: "https://images.unsplash.com/photo-example"
tags: ["tag1", "tag2"]
---

# Your Post Title

Content goes here...
```

2. The post will automatically appear on the homepage, organized by its category (determined by folder name).

### Categories

Posts are automatically categorized based on their folder structure:
- `src/pages/posts/tech/` → "Tech" category
- `src/pages/posts/personal/` → "Personal" category

The category name is derived from the folder name, with hyphens replaced by spaces and the first letter capitalized.

## 🎨 Customization

### Site Information

Edit `src/config.ts` to change the site title, description, and other settings:

```typescript
export const SITE_TITLE: string = 'Your Blog Title'
export const SITE_DESCRIPTION: string = 'Your Blog Description'
export const ABOUT_URL: string = '/about'
```

### Themes

The template comes with Solarized Light and Night Owl Dark themes. You can customize these in `src/styles/theme.ts`:

```typescript
// Customize the light and dark theme colors
export const themes = {
    light: {
        // Solarized Light theme colors
        background: '#fdf6e3',
        foreground: '#d35f06',
        // ...
    },
    dark: {
        // Night Owl Dark theme colors
        background: '#011627',
        foreground: '#d6deeb',
        // ...
    }
}
```

These colors are referenced in the Tailwind config file.

### Styling

Edit `tailwind.config.cjs` to customize design tokens and theme settings. Customize global styles in `src/styles/global.css`.

### Components

The template uses a mix of Astro components (`.astro`) and React components (`.tsx`). You can modify these or create new ones in the `src/components/` directory.

## 🚀 Deployment

### Build for Production

Generate a production build:

```bash
npm run build
```

The compiled site will be in the `dist/` directory.

### Deploying to Vercel, Netlify, or GitHub Pages

This site is optimized for deployment on any static site hosting platform. Just connect your repository to your hosting service of choice, and it will automatically deploy your site when you push changes.

Example for Vercel:
1. Push your code to GitHub
2. Create a new project on Vercel
3. Import your repository
4. Set the framework preset to "Astro"
5. Deploy

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

- Built with [Astro](https://astro.build)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Interactive components with [React](https://reactjs.org)
- Icons from [React-Icons](https://react-icons.github.io/react-icons)
- Theme inspired by [Solarized](https://ethanschoonover.com/solarized/) and [Night Owl](https://github.com/sdras/night-owl-vscode-theme)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
---
