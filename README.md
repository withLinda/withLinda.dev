# Composer Astro React Tailwind

A modern blog template built with Astro, React, and Tailwind CSS. This template provides a fast, SEO-friendly blog platform with a beautiful design and dark mode support.

## ✨ Features

- ⚡️ **Blazing Fast** - Built with Astro for optimal performance
- 🎨 **Beautiful Design** - Styled with Tailwind CSS
- 🌙 **Dark Mode** - Seamless theme switching
- ⚛️ **React Components** - Interactive UI elements with React
- 📱 **Fully Responsive** - Mobile-first design approach
- 🔍 **SEO Optimized** - Built-in sitemap and meta tags
- 🔒 **TypeScript** - Type-safe code
- 📝 **Markdown Support** - Write blog posts in Markdown
- 🎯 **Zero JS by default** - No JavaScript runtime overhead

## 🚀 Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [React](https://reactjs.org) - UI Components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type Safety
- [React Icons](https://react-icons.github.io/react-icons) - Icons

## 📦 Project Structure

```
/
├── public/          # Static assets
│   └── fonts/      # Custom fonts
├── src/
│   ├── components/ # UI Components
│   ├── layouts/    # Page layouts
│   ├── pages/      # Page routes
│   └── styles/     # Global styles
└── package.json
```

## 🛠️ Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd composer-astro-react-tailwind
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

## 📝 Available Commands

| Command           | Action                                       |
|:-----------------|:---------------------------------------------|
| `npm install`     | Install project dependencies                 |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally             |
| `npm run astro`   | Run Astro CLI commands                      |

## 🎨 Customization

- **Styling**: Edit `tailwind.config.cjs` to customize your design tokens
- **Components**: Add React components in `src/components`
- **Pages**: Add new pages in `src/pages` directory
- **Blog Posts**: Add markdown files in `src/pages/posts`
- **Fonts**: Add custom fonts in `public/fonts`

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_SITE_URL=your-site-url
```

## 📄 License

This project is licensed under the MIT License.
