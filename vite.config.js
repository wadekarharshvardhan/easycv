import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  optimizeDeps: {
    include: ['jspdf'],
  },
  server: {
    port: 3000,
    host: true,
    headers: {
      'Content-Security-Policy': "script-src 'self'; object-src 'self'",
    },
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
    },
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
  },
  base: "/dist/",
});
