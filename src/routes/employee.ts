import * as Router from "koa-router";
import * as jwt from "jsonwebtoken";

const router = new Router({
  prefix: "/employee",
});

const superUser = {
  login: "cachou",
  password: "lajaunie",
};

const secret = "18AvenueLarrieuThibaud";

router
  .post("/", (ctx, next) => {
    const { login, password } = ctx.request.body;
    console.log(login, password);
    if (!(login && password)) {
      ctx.throw("login and password are required", 400);
    }
    if (login === superUser.login && password === superUser.password) {
      ctx.body = jwt.sign({ login }, secret);
    } else {
      ctx.throw(401);
    }
    next();
  });

export default router;
