import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { createServer } from "node:http";

const root = resolve(process.cwd(), "../..");
const port = Number(process.env.PORT ?? 4173);
const types = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
]);

createServer(async (req, res) => {
  const raw = decodeURIComponent(req.url ?? "/");
  const url = raw === "/" ? "/apps/docs/index.html" : raw;
  const path = resolve(root, `.${url}`);

  if (!path.startsWith(root) || !existsSync(path)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const info = await stat(path);
  const file = info.isDirectory() ? join(path, "index.html") : path;
  res.writeHead(200, {
    "content-type": types.get(extname(file)) ?? "application/octet-stream",
  });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`[@zaemoru/docs] http://localhost:${port}/apps/docs/`);
});
