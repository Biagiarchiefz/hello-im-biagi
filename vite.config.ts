import path from "path"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
// type-only import: mengaktifkan augmentasi tipe `ssgOptions` pada config Vite.
import type {} from "vite-react-ssg";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Opsi pre-rendering (SSG). Dibaca oleh `vite-react-ssg build`.
  ssgOptions: {
    // "nested": /projects -> /projects/index.html, /projects/1 -> /projects/1/index.html.
    // Cocok dengan cara Vercel menyajikan direktori (index.html otomatis).
    dirStyle: "nested",
    // Default vite-react-ssg MEMBUANG route dinamis (":id"), jadi kita daftarkan
    // sendiri halaman detail proyek. Kalau menambah proyek baru, tambahkan id-nya
    // di sini DAN di scripts/generate-sitemap.mjs.
    includedRoutes(paths) {
      const staticPaths = paths.filter((p) => !p.includes(":"));
      const projectPaths = [1, 2, 3, 4, 5].map((id) => `/projects/${id}`);
      return [...staticPaths, ...projectPaths];
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split heavy vendors into their own chunks so they download in
        // parallel and stay cached across deploys instead of blocking the
        // initial render inside one monolithic bundle.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("/motion/") || id.includes("/framer-motion/"))
            return "motion";
          if (id.includes("/lucide-react/")) return "icons";
          if (id.includes("/react-router/") || id.includes("/react-router-dom/"))
            return "router";
          if (
            id.includes("/react-dom/") ||
            id.includes("/react/") ||
            id.includes("/scheduler/")
          )
            return "react";
        },
      },
    },
  },
});
