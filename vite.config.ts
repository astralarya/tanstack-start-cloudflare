import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      "react-native/Libraries/Image/AssetRegistry":
        "react-native/Libraries/Image/AssetRegistry",
      "react-native": "react-native-web",
    },
    extensions: [
      ".web.mts",
      ".web.mjs",
      ".web.tsx",
      ".web.jsx",
      ".web.ts",
      ".web.js",
      ".mts",
      ".mjs",
      ".tsx",
      ".jsx",
      ".ts",
      ".js",
      ".json",
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      alias: {
        "react-native/Libraries/Image/AssetRegistry":
          "react-native/Libraries/Image/AssetRegistry",
        "react-native": "react-native-web",
      },
      resolveExtensions: [
        ".web.mts",
        ".web.mjs",
        ".web.tsx",
        ".web.jsx",
        ".web.ts",
        ".web.js",
        ".mts",
        ".mjs",
        ".tsx",
        ".jsx",
        ".ts",
        ".js",
        ".json",
      ],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // plugins: [esbuildFlowPlugin()],
    },
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      srcDirectory: "src",
      start: { entry: "./start.tsx" },
      server: { entry: "./server.ts" },
    }),
    // cloudflare(),
    viteReact(),
    tailwindcss(),
  ],
});
