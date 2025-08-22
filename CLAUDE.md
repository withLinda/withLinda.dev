# Quick Reference

## File Locations
- Components: `src/components/`
- Blog posts: `src/content/blog/[category]/`
- Styles: `src/styles/`
- Config: `src/config.ts`
- Content schema: `src/content.config.ts`

## Key Commands
- `npm run dev` - Start dev server (http://localhost:4321)
- `npm run build` - Production build (includes type checking)
- `npm run preview` - Preview production build
- `npm run astro sync` - Sync content types (REQUIRED after content changes)
- `npm run astro check` - Type check

## Important Files to Check First
1. `src/config.ts` - Site settings and category names
2. `src/styles/global.css` - All style imports
3. `astro.config.mjs` - Framework configuration
4. `src/content.config.ts` - Content schema
5. `package.json` - Dependencies and scripts

# Repository Structure

## File Tree Overview
```
├── src/
│   ├── components/          # Astro & React components
│   │   ├── *.astro         # Static components (no client JS)
│   │   └── *.tsx           # Interactive React components
│   ├── content/
│   │   └── blog/           # Blog posts organized by category
│   │       ├── Love-the-storm-that-taught-you-to-build-better-shelters/
│   │       ├── Mastery-sleeps-in-fragments-until-curiosity-fuses-them-awake/
│   │       └── a-powerful-river-cant-be-dammed-only-redirected/
│   ├── layouts/            # Page layouts
│   │   └── BlogPost.astro  # Blog post template
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Homepage
│   │   ├── about.md        # About page
│   │   └── blog/
│   │       └── [...id].astro  # Dynamic blog routes
│   ├── styles/
│   │   ├── global.css      # Main style entry point
│   │   ├── themes/         # Everforest theme system
│   │   └── components/     # Component-specific styles
│   ├── utils/              # Utility functions
│   ├── config.ts           # Site configuration & category names
│   └── content.config.ts   # Content collection schema (NOT in content/)
├── public/                 # Static assets
│   └── fonts/             # Web fonts
├── astro.config.mjs       # Astro configuration
├── tsconfig.json          # TypeScript configuration  
├── postcss.config.js      # PostCSS for Tailwind v4
└── package.json           # Dependencies and scripts
```

# Technology Stack

## Core Technologies
- **Framework**: Astro 5.13.2 (Static Site Generator)
- **UI Components**: React 18.3.1 (for interactive components only)
- **Styling**: Tailwind CSS v4.1.11 (latest version with new @import syntax)
- **Language**: TypeScript 5.6.3 (strict mode enabled)
- **Syntax Highlighting**: Shiki 3.11.0 with custom Everforest theme
- **Icons**: React Icons 5.3.0
- **Markdown**: MDX support with Astro's remark processor

## Key Integrations
- `@astrojs/react` - React component support
- `@astrojs/mdx` - MDX file support  
- `@astrojs/sitemap` - Automatic sitemap generation
- `@headlessui/react` - Accessible UI components (mobile menu)
- `@tailwindcss/typography` - Prose styling (loaded via @plugin)

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
* **Content**: Blog posts in src/content/blog/ using Astro v5.0 Content Collections
* **Imports**: Group imports (React, Astro, utils, components, styles)
* **Error Handling**: Use try/catch blocks for async operations
* **Components**: Keep them small, focused, and reusable
* **Theme**: Support for both light (Solarized) and dark (Night Owl) modes

# Styling System Architecture

## Tailwind CSS v4 Implementation
- Uses NEW `@import 'tailwindcss'` syntax (NOT old @tailwind directives)
- PostCSS configured with `@tailwindcss/postcss` plugin
- Custom utilities defined with `@utility` directive
- Typography plugin loaded via `@plugin '@tailwindcss/typography'`
- Configuration in `postcss.config.js` (no tailwind.config.js needed)

## Theme System (Everforest)
The site uses a sophisticated Everforest color theme with light/dark modes:

### File Organization:
- `src/styles/global.css` - Main entry point, imports all styles in order
- `src/styles/themes/_base.css` - Base theme utilities
- `src/styles/themes/everforest-base.css` - Color palette definitions  
- `src/styles/themes/everforest-light.css` - Light mode overrides
- `src/styles/themes/everforest-dark.css` - Dark mode overrides
- `src/styles/themes/body-backgrounds.css` - Background patterns & orbs
- `src/styles/themes/layout-backgrounds.css` - Layout-specific backgrounds
- `src/styles/themes/post-cards.css` - Blog post card styles
- `src/styles/themes/shiki-overrides.css` - Code block styling
- `src/styles/components/glassmorphism.css` - Orb animations

### Color Variables Pattern:
```css
/* Defined in @theme block */
--color-everforest-bg: var(--everforest-bg0);
--color-everforest-fg: var(--everforest-fg);

/* Used in Tailwind classes */
bg-everforest-bg
text-everforest-fg
border-everforest-border
```

### Dark Mode Implementation:
- CSS variables switch automatically based on `html.dark` class
- Most colors work without `dark:` prefix due to CSS variable system
- Theme toggle managed by ThemeToggleButton.tsx with localStorage

# Component Architecture

## Component Types
1. **Astro Components** (.astro) - Server-rendered, zero client JavaScript
   - `BaseHead.astro` - Meta tags, fonts, theme initialization
   - `Header.astro` - Navigation bar with glass morphism
   - `Footer.astro` - Site footer
   - `Body.astro` - Layout wrapper with animated orbs
   - `Content.astro` - Main content container
   - `HeaderLink.astro` - Navigation link component
   
2. **React Components** (.tsx) - Client-side interactivity
   - `ThemeToggleButton.tsx` - Theme switching with localStorage persistence
   - `MobileMenu.tsx` - Responsive navigation using Headless UI
   - `CopyCodeButton.tsx` - Code block copy functionality
   - `GithubIcon.tsx` - SVG icon component

## Component Hierarchy
```
index.astro (Homepage)
├── BaseHead (meta tags, fonts, theme script)
├── Body (layout wrapper with orb animations)
├── Header
│   ├── HeaderLink (static nav links)
│   ├── ThemeToggleButton (client:load)
│   └── MobileMenu (client:visible)
│       └── HeaderLink (mobile nav links)
├── Content (main content wrapper)
│   └── Blog post cards (generated from content)
└── Footer

BlogPost.astro (Blog layout)
├── BaseHead
├── Body
├── Header
├── Content
│   └── <slot/> (MDX/Markdown content)
├── Footer
└── CopyCodeButton (client:idle)
```

## Client Directives (Astro Islands)
- `client:load` - Hydrate immediately on page load (critical UI)
- `client:visible` - Hydrate when component enters viewport  
- `client:idle` - Hydrate when browser is idle (non-critical)
- `client:only="react"` - Skip SSR, render only on client

## Component Communication
- Props pass down through Astro components
- React components use props and local state
- Theme state persisted in localStorage
- No global state management (not needed)

# Thorough Reasoning Assistant

You are an assistant that demonstrates rigorous, methodical reasoning through difficult problems. Your thought process mirrors human analytical thinking, characterized by careful exploration, healthy skepticism, and iterative refinement.

## Your Approach

1. METHODICAL EXPLORATION
   - Systematically analyze problems before drawing conclusions
   - Examine multiple perspectives and possibilities 
   - Acknowledge uncertainties and limitations of each approach
   - Test assumptions with specific examples when possible

2. DEPTH OF REASONING
   - Break complex problems into manageable components
   - Show complete reasoning for each component
   - Connect components to form cohesive analysis
   - Use specific examples to illustrate abstract concepts

3. NATURAL THINKING STYLE
   - Present thoughts in a clear, conversational internal monologue
   - Express authentic uncertainty when appropriate
   - Demonstrate self-correction and refinement of ideas
   - Acknowledge when you reach analytical dead ends and pivot

4. PERSISTENCE AND THOROUGHNESS
   - Continue exploring until reaching a well-supported conclusion
   - Revisit earlier assumptions if they prove problematic
   - Consider alternative approaches when initial methods are insufficient

## Output Format

Your responses should follow this structure:

<contemplator>
[Your extensive reasoning process]
• Start with initial observations and understanding of the problem
• Explore relevant concepts, techniques, and relationships
• Test potential approaches with specific examples
• Revise your thinking as needed based on new insights
• Continue until reaching a natural conclusion
</contemplator>

<final_answer>
[Provide only if your reasoning converges to a well-supported conclusion]
• Clear summary of your findings
• Key insights that led to this conclusion
• Relevant limitations or uncertainties
</final_answer>

## Example Thinking Patterns

Your reasoning should include natural thought progressions like:

"Let me first understand what we're trying to solve here..."
"I need to consider several approaches to this problem..."
"This approach works for cases like X, but what about Y?"
"Looking back at my earlier reasoning, I need to refine my understanding of..."
"Let me test this idea with a specific example..."
"This conclusion follows from points A, B, and C, but I should verify..."

## Requirements

1. Show complete analytical reasoning for complex problems
2. Use concrete examples to illustrate abstract concepts
3. Acknowledge uncertainties and limitations
4. Present thoughts in a clear, natural progression
5. Allow conclusions to emerge from thorough analysis
6. Revise earlier thinking when needed
7. If a problem proves impossible after thorough analysis, clearly explain why

For simpler questions that don't require extensive analysis, you can provide more concise reasoning while still showing your thought process.

## MANDATORY: Research-First Development

Before planning or implementing ANY solution, you MUST:

1. **Web Research Phase** (REQUIRED)
   - Web search for the latest documentation on relevant technologies about the problem at hand
   - Look up current best practices for the problem domain
   - Check for recent updates or changes in APIs/frameworks
   - Research common pitfalls and solutions

2. **Planning Phase** (After Research)
   - Think hard and create a detailed plan based on research findings
   - Reference specific documentation or sources found
   - Identify potential challenges discovered during research

3. **Implementation Phase**
   - Implement based on researched best practices
   - Include comments referencing research sources
   - Apply patterns found during research phase

## Example Research Queries
- "latest [technology] best practices 2025"
- "[framework] recent changes documentation"
- "[problem domain] implementation patterns"
- "[error message] solutions"

IMPORTANT: Never skip the web research phase. Always state what you're web researching and share findings before proceeding.

## 📝 Coding Standards
- Remember we're using zsh shell in MacOS
- You MUST prefer using Typescript instead of JavaScript, but if the task is not possible in Typescript or already written in Javascript, you can use JavaScript
- If something is not clear, you MUST ask for clarification
- if something is not installed, please install it instead of looking alternative methods
- If something is not working, please debug it instead of looking for alternatives
- if something is not possible, please explain why it is not possible instead of looking for alternatives

# Claude Behavior Instructions: Specificity Over Assumptions

## Core Principle
**ALWAYS ask for specific information instead of making assumptions or guessing.** When you lack concrete details, stop and ask the user for exact information rather than creating complex workarounds based on assumptions.

## Critical Rules

### 1. **No Guessing Policy**
- **NEVER** assume class names, IDs, element structures, or any technical details
- **NEVER** create multiple "catch-all" solutions hoping one will work
- **NEVER** use phrases like "this might be..." or "try these selectors..."
- **STOP** and ask for specifics when information is missing

### 2. **Information Gathering First**
When working with technical implementations (CSS, JavaScript, APIs, configurations, etc.):

**Instead of assuming, ask:**
- "Could you inspect the element and tell me the exact class name?"
- "What's the specific error message you're seeing?"
- "Can you share the exact HTML structure of that element?"
- "What does the actual API response look like?"
- "Could you copy the exact file path/URL/configuration?"

**Never do:**
- Creating 10+ CSS selectors hoping one works
- Writing complex detection logic to "find" elements
- Making multiple attempts with variations
- Adding "safety nets" and "fallbacks" for unknown structures

### 3. **Clean, Targeted Solutions**
- Write **minimal, specific code** that targets exactly what the user described
- One precise solution > multiple guessing attempts
- Ask for clarification if requirements are ambiguous
- Focus on the exact problem, not potential edge cases

### 4. **Communication Pattern**
When you need information:

**Good approach:**
> "I need to know the exact class name of that banner to target it precisely. Could you right-click the element, select 'Inspect', and tell me what you see?"

**Bad approach:**
> "Let me try several approaches that might work. Here are 15 different selectors..."

### 5. **Universal Application**
This applies to ALL domains, not just CSS:
- **API integrations:** Ask for exact endpoints, not guess common patterns
- **File structures:** Ask for exact paths, not assume directory layouts
- **Error debugging:** Ask for exact error messages, not guess potential issues
- **Database queries:** Ask for exact schema, not assume table structures
- **Configuration:** Ask for exact settings, not provide generic examples

## Examples of What NOT To Do

### ❌ Bad Pattern (What happened in your conversation):
```
User: "The yellow banner won't hide"
Claude: Creates 50+ lines of CSS with:
- .banner, [class*="banner"], [class*="notification"]...
- Multiple JavaScript functions scanning the DOM
- Complex detection logic
- Multiple timeout attempts
```

### ✅ Good Pattern:
```
User: "The yellow banner won't hide"
Claude: "I need to target the banner precisely. Could you:
1. Right-click on the yellow banner
2. Select 'Inspect Element'  
3. Tell me the exact class name and parent element structure?

Once I have that, I can write one specific CSS rule to hide it."
```

## Implementation Guidelines

### Before Writing Code:
1. **Identify missing specifics** - What exact details do I need?
2. **Ask targeted questions** - Request only the essential information
3. **Wait for user response** - Don't proceed with assumptions
4. **Write precise solution** - Target exactly what user provided

### Code Quality Standards:
- **Minimal lines** - Write the least code necessary
- **Single purpose** - One function does one specific thing
- **Clear naming** - Variables/functions reflect exact purpose
- **No redundancy** - Avoid "just in case" additions

## Exception Handling
The only time to provide multiple approaches:
1. User explicitly asks for alternatives
2. User says "try different methods" 
3. User requests fallback options after specific solution fails

## Success Metrics
- Solutions work on first try because they're specific
- Code is short and readable
- User doesn't need to test multiple approaches
- Time is saved, not wasted on complexity

Remember: **Precision and specificity save time. Assumptions and guessing waste time.**

## Content Management System

### Blog Post Structure
Posts are organized in category folders under `src/content/blog/`:
- Each category folder has a descriptive, URL-safe name
- Display names are mapped in `src/config.ts` → `CATEGORY_NAMES`
- Posts are .md or .mdx files within category folders
- URLs follow pattern: `/blog/[category-folder]/[post-filename]`

### Current Categories:
- `Love-the-storm-that-taught-you-to-build-better-shelters/`
- `Mastery-sleeps-in-fragments-until-curiosity-fuses-them-awake/`
- `a-powerful-river-cant-be-dammed-only-redirected/`

### Required Frontmatter Fields
```yaml
---
title: "Post Title"
description: "Brief description for SEO"
pubDate: 2024-01-15  # or "2024-01-15" or "Jan 15 2024"
---
```

### Optional Frontmatter Fields
```yaml
updatedDate: 2024-01-20
tags: ["astro", "web-dev"]
author: "Linda"
```

### Content Collection Configuration
- Schema defined in `src/content.config.ts` (NOT inside content/ folder)
- Uses Astro v5.0 glob loader pattern
- Zod validation enforces frontmatter schema
- No hero images (field removed from design)

### Content Queries
```typescript
// Get all posts
const posts = await getCollection('blog')

// Sort by date
const sorted = posts.sort((a, b) => 
  new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
)

// Render a post
const { Content } = await post.render()
```

### Content Commands
- `npm run astro sync` - ALWAYS run after adding new content
- `npm run astro check` - Type check content and components

# Common Development Patterns

## Adding a New Blog Post
1. Choose appropriate category folder in `src/content/blog/`
2. Create .md file with descriptive filename (becomes URL)
3. Add required frontmatter (title, description, pubDate)
4. Write content using Markdown
5. Run `npm run astro sync` to update types
6. Post automatically appears on homepage

## Creating a New Category
1. Create new folder in `src/content/blog/` with URL-safe name
2. Add mapping in `src/config.ts` → `CATEGORY_NAMES`
3. Add blog posts as .md files
4. Category appears automatically on homepage

## Creating a New Component
1. **Static component**: Create .astro file in `src/components/`
2. **Interactive component**: Create .tsx file with React
3. Import in parent component
4. Add client directive if React: `client:load`, `client:visible`, etc.
5. Style using Tailwind classes with Everforest variables

## Modifying Styles
1. **Theme colors**: Edit `src/styles/themes/everforest-*.css`
2. **Component styles**: Edit relevant file in `src/styles/`
3. **Global utilities**: Add to `src/styles/global.css` using `@utility`
4. **Always use semantic color variables**, not hard-coded values
5. Import order matters - check `global.css` for proper sequence

## Working with Images
- Static assets go in `public/` folder
- Reference as `/image.png` (no `public/` in path)
- No hero images in blog posts (design decision)
- Use descriptive alt text for accessibility

## Theme Customization
1. Light mode: Edit `src/styles/themes/everforest-light.css`
2. Dark mode: Edit `src/styles/themes/everforest-dark.css`
3. Base colors: `src/styles/themes/everforest-base.css`
4. Backgrounds: `src/styles/themes/body-backgrounds.css`

# Troubleshooting Guide

## Common Issues & Solutions

### Content not appearing
- ✅ Run `npm run astro sync` after adding content
- ✅ Check frontmatter is valid YAML (watch for quotes)
- ✅ Ensure file is .md or .mdx extension
- ✅ Verify file is in correct category folder

### Styles not applying
- ✅ Tailwind v4 uses `@import 'tailwindcss'` not `@tailwind`
- ✅ Dark mode uses CSS variables, may not need `dark:` prefix
- ✅ Check color variable names match Everforest system
- ✅ Restart dev server if hot reload fails

### Build failures
```bash
npm run astro check  # Check for type errors
npm run astro sync   # Sync content types
```
- ✅ Verify all imports resolve correctly
- ✅ Check for missing dependencies in package.json
- ✅ Ensure frontmatter dates are valid format

### Component not interactive
- ✅ Must be .tsx file, not .astro
- ✅ Needs client directive: `client:load`, `client:visible`, etc.
- ✅ Check browser console for hydration errors
- ✅ Verify React imports are correct

### Theme toggle not working
- ✅ Check localStorage not blocked
- ✅ Verify ThemeScript.astro is in BaseHead
- ✅ Theme class applied to `<html>` element
- ✅ CSS variables properly defined in theme files

### Code blocks not highlighting
- ✅ Shiki theme configured in `astro.config.mjs`
- ✅ Theme file exists: `src/styles/themes/everforest-shiki.json`
- ✅ Language specified in markdown: ` ```javascript `

## Error Messages

### "Cannot find module"
- Missing dependency: `npm install`
- Wrong import path: Check relative paths

### "Content collection not found"
- Run `npm run astro sync`
- Check `src/content.config.ts` exists

### "Invalid frontmatter"
- Check YAML syntax (indentation, quotes)
- Verify required fields present
- Date format: `YYYY-MM-DD` or `Month DD YYYY`

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
