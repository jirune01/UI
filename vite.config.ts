import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      constants: path.resolve(__dirname, "src/constants"),
      styles: path.resolve(__dirname, "src/styles"),
      types: path.resolve(__dirname, "src/types"),
      hooks: path.resolve(__dirname, "src/hooks"),
      context: path.resolve(__dirname, "src/context"),
      pages: path.resolve(__dirname, "src/pages"),
      routes: path.resolve(__dirname, "src/routes"),
      services: path.resolve(__dirname, "src/services"),
      states: path.resolve(__dirname, "src/states"),
    },
  },
});
