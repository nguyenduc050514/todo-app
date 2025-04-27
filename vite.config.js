/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         "@components": path.resolve(__dirname, "src/components"),
         "@pages": path.resolve(__dirname, "src/pages"),
         "@assets": path.resolve(__dirname, "src/assets"),
         "@layout": path.resolve(__dirname, "src/layout"),
      },
   },
});
