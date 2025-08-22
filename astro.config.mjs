import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';

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
      theme: 'everforest-dark',
      wrap: false,
      transformers: []
    },
    remarkPlugins: [remarkGfm]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
