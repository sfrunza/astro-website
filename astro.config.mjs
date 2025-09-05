// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  output: 'static',
  integrations: [react(), mdx({ optimize: true }), sitemap()],
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.json',
      persist: {
        path: './.cache/wrangler/v3',
      },
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    ssr: {
      noExternal: ['@astrojs/*', 'lucide-react'],
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: true,
    },
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD
        ? {
            'react-dom/server': 'react-dom/server.edge',
          }
        : undefined,
    },
  },
  build: {
    // Enable modern browser builds for better performance
    format: 'file',
    inlineStylesheets: 'auto',
  },
  server: {
    headers: {
      'x-robots-tag': 'index, follow',
    },
  },
});
