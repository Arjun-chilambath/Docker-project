import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    open: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000", // proxy API requests to your backend
    },
  },
});
