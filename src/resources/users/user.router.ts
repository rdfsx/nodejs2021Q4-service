import * as Router from 'koa-router';
import * as usersService from './user.service';
import User from './user.model';

export const router = new Router( { prefix: '/users' } );

router.get("/", async (ctx, next) => {
  const users = await usersService.getAll();
  ctx.body = users.map(User.toResponse);
  ctx.set("Content-Type", "application/json");
  await next();
});

router.get("/:userId",async (ctx, next) => {
  const user = await usersService.getById(ctx.params.userId);
  if (!user) {
    ctx.status = 404;
    ctx.body = {
      message: "User not found"
    };
    return next();
  }
  ctx.body = User.toResponse(user);
  ctx.set("Content-Type", "application/json");
  await next();
});

router.post("/", async (ctx, next) => {
  const user = await usersService.create(ctx.request.body);
  ctx.body = User.toResponse(user);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
  await next();
});

router.put("/:userId", async (ctx, next) => {
  const user = await usersService.update(ctx.params.userId, ctx.request.body);
  ctx.body = User.toResponse(user);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
  await next();
});

router.delete("/:userId", async (ctx, next) => {
  await usersService.delete_(ctx.params.userId);
  ctx.status = 204;
  await next();
});
