// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bouajilaprog.com',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'motion', 'motion/react'],
      exclude: ['@astrojs/react'],
    },
    ssr: {
      noExternal: ['motion'],
    },
    build: {
      commonjsOptions: {
        include: [/motion/, /node_modules/],
      },
    },
  }
});
