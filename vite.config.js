import { defineConfig } from "vite";

import Unocss from "unocss/vite";

import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  server: {
    port: 3000
  },
  preview: {
    port: 8000
  },
  plugins: [
    Unocss(),
    solidPlugin(),
  ],
  resolve: {
    alias: {
      'solid-js/web': 'node_modules/solid-js/web/dist/web.js',
    },
  },
  build: {
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', 'jspdf', 'html2canvas'],
    },
  },
});
