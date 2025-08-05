import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://withlinda.dev/',
  integrations: [
    react(),
    sitemap(),
    mdx({
      extendMarkdownConfig: true,
      gfm: true,
      optimize: true,
      // Add support for processing JSX in MDX
      jsx: true,
      // Enable remark plugins if needed
      remarkPlugins: [],
      // Enable rehype plugins if needed
      rehypePlugins: []
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
