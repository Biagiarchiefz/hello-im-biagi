import path from "path"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
