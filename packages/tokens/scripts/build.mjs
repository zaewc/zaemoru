import { mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const src = join(root, "src", "index.css");
const outDir = join(root, "dist");
const out = join(outDir, "index.css");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, out);
console.log("[@zaemoru/tokens] copied src/index.css -> dist/index.css");
