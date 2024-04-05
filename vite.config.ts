import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
  },
  define: {
    APP_VERSION: JSON.stringify(packageJson.version),
  },
  server: {
    port: 3000,
  },
  plugins: [react(), splitVendorChunkPlugin()],
});
