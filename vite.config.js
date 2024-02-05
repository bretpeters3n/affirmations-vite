import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/affirmations-vite/",
  plugins: [react()],
  root: "src",
});
