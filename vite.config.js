// import { splitVendorChunkPlugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { dependencies } from "./package.json";
// function renderChunks(deps) {
//   let chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if (["react", "react-router-dom", "react-dom"].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// }

export default defineConfig({
  plugins: [react()],
  base: "/affirmations-vite/",
  // build section added to stop size warnings during deploy processes
  // consider changing in the future, as this is a temporary fix
  // build: {
  //   sourcemap: false,
  //   chunkSizeWarningLimit: 100,
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ["react", "react-router-dom", "react-dom"],
  //         ...renderChunks(dependencies),
  //       },
  //     },
  //     onwarn(warning, warn) {
  //       if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
  //         return;
  //       }
  //       warn(warning);
  //     },
  //   },
  // },
  // plugins: [react(), splitVendorChunkPlugin()],
  // root: "src",
});
