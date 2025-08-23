import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load BOTH theme JSON files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load dark theme
const everforestDarkTheme = JSON.parse(
  readFileSync(join(__dirname, 'src/styles/themes/everforest-shiki.json'), 'utf-8')
);

// Load light theme
const everforestLightTheme = JSON.parse(
  readFileSync(join(__dirname, 'src/styles/themes/everforest-light-shiki.json'), 'utf-8')
);

export default defineConfig({
  site: 'https://withlinda.dev/',
  integrations: [
    react(),
    sitemap(),
    mdx({
      extendMarkdownConfig: true,
      gfm: true,
      optimize: true,
      jsx: true,
      remarkPlugins: [],
      rehypePlugins: []
    })
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // CRITICAL: Use 'themes' (plural) NOT 'theme' (singular)
      themes: {
        light: everforestLightTheme,
        dark: everforestDarkTheme
      },
      wrap: false,
      transformers: []
    },
    remarkPlugins: [remarkGfm]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
