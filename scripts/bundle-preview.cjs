const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/main.tsx"],
    bundle: true,
    outfile: "public/app.js",
    format: "esm",
    jsx: "automatic",
    target: "es2020",
    logLevel: "info",
  })
  .catch(() => process.exit(1));
