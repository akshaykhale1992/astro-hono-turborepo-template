import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello from Hono",
  });
});

serve({
  fetch: app.fetch,
  port: 3001,
});

console.log("API running on 3001");
