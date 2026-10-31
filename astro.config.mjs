// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://bouajilaprog.com",
  devToolbar: { enabled: false },
  server: { port: 1600 },
  vite: {
    plugins: [tailwindcss()],
  },
});
