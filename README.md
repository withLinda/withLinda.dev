# withLinda.dev

Linda's personal blog built with Astro v5.0, featuring modern Content Collections, dual themes, and optimized performance.

## ✨ Features

- ⚡️ **Astro v5.0** - Modern Content Collections with type safety and glob loader
- 🌙 **Dual Themes** - Solarized Light and Night Owl Dark modes
- 📱 **Responsive** - Mobile-first design with Tailwind CSS
- 📝 **Content Collections** - Type-safe blog posts with Zod schema validation
- 🔍 **SEO Optimized** - Meta tags and automatic sitemap generation
- 📋 **Code Highlighting** - Syntax highlighting with copy functionality

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm/yarn

### Setup

1. **Clone and install:**
```bash
git clone https://github.com/withLinda/withLinda.dev.git my-blog
cd my-blog
npm install
```

2. **Start development:**
```bash
npm run dev
```

3. **Open:** `http://localhost:4321`

## 📂 Project Structure

```
src/
├── content/
│   └── blog/                 # Blog posts (Markdown files)
│       ├── foundation-cache-saved/
│       └── heart-vault/
├── content.config.ts         # Content Collections config
├── pages/
│   ├── blog/[...id].astro   # Dynamic blog routes
│   ├── about.md             # About page
│   └── index.astro          # Homepage
├── layouts/
│   └── BlogPost.astro       # Blog post layout
├── components/              # UI components
└── styles/                  # Global styles & themes
```

## 📝 Adding Content

### Create a Blog Post

1. **Add a new `.md` file** in `src/content/blog/[category]/`:

```md
---
title: "Your Post Title"
description: "Brief description of your post"
pubDate: "2025-01-21"
---

# Your Post Title

Content goes here...
```

2. **Run sync command:**
```bash
npm run astro sync
```

3. **Required fields:** `title`, `description`, `pubDate`
4. **Optional fields:** `updatedDate`, `tags`, `author`

### Categories
Posts are organized by folder structure:
- `src/content/blog/tech/` → "Tech" category
- `src/content/blog/personal/` → "Personal" category

## ⚙️ Configuration

### Site Settings
Edit `src/config.ts`:
```typescript
export const SITE_TITLE = 'Your Blog Title'
export const SITE_DESCRIPTION = 'Your description'
```

### Content Schema
Modify `src/content.config.ts` to customize the blog post schema using Zod validation.

## 🚀 Deployment

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages).

## 📋 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run astro sync` - Sync Content Collections (run after config changes)
- `npm run astro check` - Type checking

---

Built with [Astro](https://astro.build) • Styled with [Tailwind CSS](https://tailwindcss.com) • Icons from [React Icons](https://react-icons.github.io)