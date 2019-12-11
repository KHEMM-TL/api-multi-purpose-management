import * as Router from "koa-router";
import routerEmployee from "./employee";

const router = new Router({
  prefix: "/api",
});

router
  .use(routerEmployee.routes());

export default router;
