import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/cloudflare-pages";

type Bindings = {
  SERVICE_NAME?: string;
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.use("*", cors());

app.get("/health", (c) => {
  return c.json({
    ok: true,
    service: c.env.SERVICE_NAME ?? "RESET BODY STUDIO",
  });
});

app.post("/contact", async (c) => {
  const body = await c.req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return c.json({ ok: false, message: "Invalid request body." }, 400);
  }

  return c.json({
    ok: true,
    message: "お問い合わせ内容を受け付けました。",
  });
});

export const onRequest = handle(app);
