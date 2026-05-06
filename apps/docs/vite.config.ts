import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@zaemoru/elements": resolve(__dirname, "../../packages/elements/src/index.ts"),
      "@zaemoru/tokens/index.css": resolve(__dirname, "../../packages/tokens/src/index.css"),
    },
  },
});
