import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    Unocss(),
    solidPlugin(),
  ],
  optimizeDeps: {
    include: ['jspdf', 'html2canvas', 'solid-js', 'solid-js/web'],
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', 'jspdf', 'html2canvas'],
    },
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
    outDir: 'dist',
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 8000,
  },
});
