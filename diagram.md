Based on the codebase analysis, here's the Component Tree with Data Flow diagram using ASCII characters:

```
index.html
│
├─── BaseHead.astro ──────────────────────┐
│    (Props: title, description, image)    │
│                                         │
├─── Body.astro                           │    global.css
│    │                                    │    │
│    ├─── Header.astro ───────────────────┼────┤
│    │    │                               │    │
│    │    ├─── HeaderLink.astro          │    │
│    │    │    (Props: href, className)   │    │
│    │    │                               │    │
│    │    └─── ThemeToggleButton.tsx ─────┼────┘
│    │         State: theme, isMounted     │
│    │                                     │
│    ├─── Content.astro                    │
│    │    (Props: className)               │
│    │    │                                │
│    │    └─── BlogPost.astro             │
│    │         (Props: title, description, │
│    │          heroImage)                 │
│    │                                     │
│    └─── Footer.astro                     │
│                                          │
└──────────────────────────────────────────┘

Shared Resources:
────────────────
config.ts
├─── SITE_TITLE
├─── SITE_DESCRIPTION
└─── HOMEPAGE_URL

env.d.ts (Types)
├─── Post interface
└─── SiteConfig interface

Data Flow:
─────────
→ Config data flows from config.ts to components
→ Theme state managed in ThemeToggleButton
→ Blog post data flows from .md files to Content
→ Types enforced through env.d.ts interfaces
```

Key Notes about the Data Flow:

1. The main entry point (index.html) orchestrates the overall layout structure

2. Data flows primarily top-down through props:

   - Site configuration (from config.ts)
   - Page metadata (title, description)
   - Blog post content (from markdown files)

3. Shared Resources:

   - TypeScript interfaces (env.d.ts) provide type safety
   - Configuration constants (config.ts) maintain site-wide settings
   - Global styles (global.css) applied through BaseHead

4. State Management:

   - ThemeToggleButton manages its own state for theme switching
   - Uses localStorage for persistence
   - Communicates with document root for theme class changes

5. Content Flow:
   - Blog posts are loaded via Astro.glob()
   - Markdown content is processed through BlogPost layout
   - Content is rendered within the Content component

This structure follows Astro's component-based architecture while maintaining clear data flow patterns and type safety through TypeScript integration.

---

Based on the codebase analysis, here's a detailed Data Flow Diagram showing the component hierarchy, props, and data flow:

```
┌─────────────────────────────────────────────┐
│ index.astro (Entry Point)                   │
│ Props: None                                 │
│ Data: posts (from ./posts/*.md)            │
└─┬───────────────────────────────────────────┘
  │
  ├──▼─────────────────────┐  ┌─────────────────────────┐
  │ BaseHead.astro         │  │ Header.astro            │
  │ Props:                 │  │ Props: None             │
  │ - title: string       ◄──┼─┤ Data: SITE_TITLE       │
  │ - description: string  │  │      HOMEPAGE_URL       │
  │ - image?: string      │  └─────────┬───────────────┘
  └───────────────────────┘            │
                                       ├──▼─────────────────────┐
                                       │ HeaderLink.astro       │
                                       │ Props:                 │
                                       │ - href: string         │
                                       │ - class?: string       │
                                       │ - ...props             │
                                       └───────────────────────┘
                                       │
                                       ├──▼─────────────────────┐
                                       │ ThemeToggleButton.tsx  │
                                       │ State:                 │
                                       │ - isMounted: boolean   │
                                       │ - theme: string        │
                                       │ Handlers:              │
                                       │ - toggleTheme()        │
                                       └───────────────────────┘

┌─────────────────────────┐
│ BlogPost.astro          │
│ Props:                  │
│ content: {             │
│   title: string        │
│   description: string  │
│   heroImage?: string   │
│ }                      │
└─────────┬─────────────┘
          │
          ├──▼─────────────────────┐
          │ Content.astro          │
          │ Props:                 │
          │ - className?: string   │
          └───────────────────────┘
          │
          ├──▼─────────────────────┐
          │ Body.astro             │
          │ Props:                 │
          │ - children (slot)      │
          └───────────────────────┘
          │
          ├──▼─────────────────────┐
          │ Footer.astro           │
          │ Props: None            │
          │ Data: HOMEPAGE_URL     │
          └───────────────────────┘

Global Data Flow:
┌─────────────────────────┐
│ config.ts               │
│ Exports:               │
│ - SITE_TITLE           │
│ - SITE_DESCRIPTION     │
│ - HOMEPAGE_URL         │
└─────────────────────────┘
```

Key Flow Patterns:

1. The main page (index.astro) serves as the entry point and coordinates the overall layout

2. Data flows down from parent to child components through props

3. ThemeToggleButton maintains its own state for theme management

4. Configuration data (from config.ts) is imported and used throughout multiple components

5. BlogPost layout serves as a template for all blog posts, receiving content through props

6. All components have access to global styles defined in global.css

The diagram shows the hierarchical nature of the application with:

- Clear parent-child relationships
- Prop types for type safety (using TypeScript)
- State management within components where needed
- Shared configuration data flow

Some notable points about the data flow:

- Most data flows downward (props drilling)
- Theme state is managed client-side in ThemeToggleButton
- Blog posts data is loaded dynamically in index.astro
- Components are highly reusable with well-defined prop interfaces

---

Let me analyze the codebase and create a detailed dependency tree.

```
src/
├── components/
│   ├── BaseHead.astro
│   │   └── imports: '../styles/global.css'
│   │
│   ├── Body.astro
│   │   └── (no imports, provides slot)
│   │
│   ├── Content.astro
│   │   └── (no imports, provides slot)
│   │
│   ├── Footer.astro
│   │   └── imports: '../config.ts'
│   │
│   ├── Header.astro
│   │   ├── imports: './HeaderLink.astro'
│   │   ├── imports: './ThemeToggleButton'
│   │   ├── imports: '../config'
│   │   └── imports: 'react-icons/io5'
│   │
│   ├── HeaderLink.astro
│   │   └── (no imports)
│   │
│   └── ThemeToggleButton.tsx
│       └── imports: 'react-icons/io5'
│
├── layouts/
│   └── BlogPost.astro
│       ├── imports: '../components/BaseHead.astro'
│       ├── imports: '../components/Header.astro'
│       ├── imports: '../components/Footer.astro'
│       ├── imports: '../components/Body.astro'
│       ├── imports: '../components/Content.astro'
│       └── imports: '../config'
│
├── pages/
│   ├── index.astro
│   │   ├── imports: '../components/BaseHead.astro'
│   │   ├── imports: '../components/Header.astro'
│   │   ├── imports: '../components/Footer.astro'
│   │   ├── imports: '../components/Body.astro'
│   │   ├── imports: '../components/Content.astro'
│   │   └── imports: '../config'
│   │
│   └── posts/
│       └── hello-world.md
│           └── uses: '../../layouts/BlogPost.astro'
│
├── styles/
│   └── global.css
│
├── config.ts
│   └── exports: SITE_TITLE, SITE_DESCRIPTION, HOMEPAGE_URL
│
└── env.d.ts
    └── type definitions:
        ├── Post interface
        └── SiteConfig interface

Shared Resources:
1. config.ts
   ├── Used by: Footer.astro
   ├── Used by: Header.astro
   ├── Used by: BlogPost.astro
   └── Used by: index.astro

2. global.css
   ├── Used by: BaseHead.astro
   └── Applied globally

3. Type Definitions (env.d.ts):
   ├── Post interface
   │   └── Used in: blog post pages
   │
   └── SiteConfig interface
       └── Used in: config.ts

Component Hierarchy:
1. Layout Level
   └── BlogPost.astro (main layout)
       ├── BaseHead
       ├── Header
       ├── Body
       ├── Content
       └── Footer

2. Page Level
   └── index.astro
       ├── BaseHead
       ├── Header
       ├── Body
       ├── Content
       └── Footer
```

Key Notes:

1. The application follows a modular component structure with clear separation of concerns
2. The `config.ts` file serves as a central configuration used across multiple components
3. Component reuse is evident in both the main layout and index page
4. TypeScript interfaces in `env.d.ts` provide type safety across the application
5. The theme toggle functionality is implemented as a React component (ThemeToggleButton.tsx)
6. CSS is managed through a combination of Tailwind and global styles

The codebase follows a typical Astro.js project structure with React integration for interactive components, demonstrating a hybrid approach to static and dynamic content.
