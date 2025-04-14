import { defineConfig } from "vite";
<<<<<<< HEAD
import Unocss from "unocss/vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  optimizeDeps: {
    include: ['jspdf'],
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: { port: 8000 },
  plugins: [Unocss(), solidPlugin()],
  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    // rollupOptions: { external: ['jspdf', 'html2canvas', '@iconify-icon/solid', 'solid-js'], },
    commonjsOptions: {
      include: [/jspdf/, /html2canvas/, '@iconify-icon/solid'],
=======
import solidPlugin from "vite-plugin-solid";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    Unocss(),
    solidPlugin(),
  ],
  build: {
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', 'jspdf', 'html2canvas'],
>>>>>>> f35d4f5 (Fix solid-js/web resolution issue)
    },
    mimeType: {
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.txt': 'text/plain',
    },
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
  },
<<<<<<< HEAD
  base: "/dist/",
=======
>>>>>>> f35d4f5 (Fix solid-js/web resolution issue)
});
