import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Unocss from "unocss/vite";

export default defineConfig({
  base: './', // Ensures relative paths for assets
  plugins: [
    Unocss(),
    solidPlugin(),
  ],
  optimizeDeps: {
    include: ['solid-js', 'solid-js/web', '@iconify-icon/solid'],
  },
  build: {
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', '@iconify-icon/solid'],
    },
  },
});
