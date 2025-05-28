import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import astroIcon from 'astro-icon';

export default defineConfig({
  site: 'https://wparvind.com', // ✅ Important for sitemap & SEO
  integrations: [
    tailwind(),
    sitemap(),
    astroIcon(), 
    compress(), // gzip + brotli
  ],
  build: {
    format: 'directory',
  },
  compressHTML: true, // inline compression for HTML output
});
