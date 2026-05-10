import { mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const srcDir = join(root, "src");
const outDir = join(root, "dist");
const files = ["index.css", "colors.js", "colors.d.ts"];

mkdirSync(outDir, { recursive: true });
for (const file of files) {
  copyFileSync(join(srcDir, file), join(outDir, file));
  console.log(`[@zaemoru/tokens] copied src/${file} -> dist/${file}`);
}
