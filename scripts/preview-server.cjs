const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const port = 5180;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  if (!cleanPath) return path.join(root, "index.html");
  if (cleanPath === "app.js" || cleanPath.startsWith("assets/")) {
    return path.join(publicDir, cleanPath);
  }
  return path.join(root, cleanPath);
}

http
  .createServer((req, res) => {
    const filePath = resolveFile(req.url || "/");
    const safeRoots = [root, publicDir];
    if (!safeRoots.some((safeRoot) => filePath.startsWith(safeRoot))) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      let body = data;
      if (path.basename(filePath) === "index.html") {
        body = Buffer.from(
          data.toString("utf8").replace("/src/main.tsx", "/app.js"),
          "utf8",
        );
      }

      res.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      res.end(body);
    });
  })
  .listen(port, "127.0.0.1");
