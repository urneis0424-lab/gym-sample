const { spawn } = require("node:child_process");
const { createWriteStream } = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const log = createWriteStream(path.join(root, "vite-5180.log"), { flags: "a" });

const child = spawn("cmd.exe", ["/c", "npm.cmd run dev"], {
  cwd: root,
  detached: false,
  stdio: ["pipe", "pipe", "pipe"],
  shell: false,
  windowsHide: true,
});

child.stdout.pipe(log);
child.stderr.pipe(log);

child.on("exit", (code, signal) => {
  log.write(`\nVite exited: code=${code} signal=${signal}\n`);
  process.exit(code ?? 1);
});

setInterval(() => {
  log.write("");
}, 60_000);
