import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/blockrush-v2/",   // 🔥 OBLIGATOIRE pour GitHub Pages
  build: {
    outDir: "dist",         // (valeur par défaut, OK)
  },
});



