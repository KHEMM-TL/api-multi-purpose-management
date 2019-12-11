import * as http from "http";
import * as path from "path";
import * as Koa from "koa";
import * as serve from "koa-static";
import * as bodyParser from "koa-bodyparser";
import router from "./routes";

const app = new Koa();

app
  .use(bodyParser())
  .use(router.routes())
  .use(serve(path.join(process.cwd(), "client/dist"), { index: "index.html" }));

const server = http.createServer(app.callback());

server.listen(3000, "localhost", () => {
  console.log("http://localhost:3000");
});
