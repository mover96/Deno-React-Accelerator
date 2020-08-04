import { Application, Router, send } from "./deps.ts";

const router = new Router();
router
  .get("/", async (context) => {
    console.log();
    try {
      await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/src`,
        index: "index.html",
      });
    } catch (err) {
      console.log(err.message);
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Starting server...");
await app.listen({ port: 3000 });
