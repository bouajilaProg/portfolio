// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bouajilaprog.com',
  server: { port: 1600 },
  vite: {
    plugins: [tailwindcss()]
  }
});