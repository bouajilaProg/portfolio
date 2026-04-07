// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bouajilaprog.com',
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24 * 31,
      bypassToken: process.env.REVALIDATE_BYPASS_TOKEN,
    },
  }),
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
