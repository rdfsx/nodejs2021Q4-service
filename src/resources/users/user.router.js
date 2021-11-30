const Router = require('@koa/router');
const User = require('./user.model');
const usersService = require('./user.service');

const router = new Router( { prefix: '/users' } );

router.get("/", async (ctx, next) => {
  const users = await usersService.getAll();
  ctx.body = users.map(User.toResponse);
  next();
});

router.get("/:userId",async (ctx, next) => {
  const user = await usersService.getUserById(ctx.params.userId);
  ctx.body = User.toResponse(user);
  next();
});

router.post("/", async (ctx, next) => {
  const user = await usersService.createUser(ctx.request.body);
  ctx.body = User.toResponse(user);
  next();
});

router.put("/:userId", async (ctx, next) => {
  const user = await usersService.updateUser(ctx.params.userId, ctx.request.body);
  ctx.body = User.toResponse(user);
  next();
});

router.delete("/:userId", async (ctx, next) => {
  await usersService.deleteUser(ctx.params.userId);
  ctx.status = 204;
  next();
});

module.exports = router.routes();
