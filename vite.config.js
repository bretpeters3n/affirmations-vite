// import { splitVendorChunkPlugin } from "vite";
import { defineConfig, loadEnv } from "vite";
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

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    // base: import.meta.env.BASE_URL,
    // base: env.VITE_BASE_URL,
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
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes("node_modules")) {
    //           return id
    //             .toString()
    //             .split("node_modules/")[1]
    //             .split("/")[0]
    //             .toString();
    //         }
    //       },
    //     },
    //   },
    // },
    // plugins: [react(), splitVendorChunkPlugin()],
    root: "src",
  };
});
