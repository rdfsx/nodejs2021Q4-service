const Router = require('@koa/router');
const User = require('./user.model');
const usersService = require('./user.service');

const router = new Router( { prefix: '/users' } );

router.get("/", async (ctx, next) => {
  const users = await usersService.getAll();
  ctx.body = users.map(User.toResponse);
  ctx.set("Content-Type", "application/json");
  next();
});

router.get("/:userId",async (ctx, next) => {
  const user = await usersService.getById(ctx.params.userId);
  ctx.body = User.toResponse(user);
  ctx.set("Content-Type", "application/json");
  next();
});

router.post("/", async (ctx, next) => {
  const user = await usersService.create(ctx.request.body);
  ctx.body = User.toResponse(user);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
  next();
});

router.put("/:userId", async (ctx, next) => {
  const user = await usersService.update(ctx.params.userId, ctx.request.body);
  ctx.body = User.toResponse(user);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
  next();
});

router.delete("/:userId", async (ctx, next) => {
  await usersService.delete_(ctx.params.userId);
  ctx.status = 204;
  next();
});

module.exports = router.routes();
