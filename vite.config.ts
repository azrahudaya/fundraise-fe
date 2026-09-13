import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE_PATH dipakai saat build untuk sub-path (GitHub Pages project site).
// Kosong = serve di root domain.
const basePath = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
