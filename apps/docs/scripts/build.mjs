import { mkdir, readFile, rm, writeFile, copyFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const app = resolve(here, "..");
const root = resolve(app, "../..");
const dist = resolve(app, "dist");
const assets = resolve(dist, "assets");

await rm(dist, { recursive: true, force: true });
await mkdir(assets, { recursive: true });

await copyFile(
  resolve(root, "packages/tokens/dist/index.css"),
  resolve(assets, "zaemoru.css"),
);
await copyFile(
  resolve(root, "packages/elements/dist/index.js"),
  resolve(assets, "zaemoru-elements.js"),
);

const html = await readFile(resolve(app, "index.html"), "utf8");
await writeFile(
  resolve(dist, "index.html"),
  html
    .replace("/packages/tokens/dist/index.css", "./assets/zaemoru.css")
    .replace("/packages/elements/dist/index.js", "./assets/zaemoru-elements.js"),
);

console.log("[@zaemoru/docs] built static HTML docs");
