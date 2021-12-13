const Router = require('@koa/router');
const tasksService = require('./task.service');

const router = new Router( { prefix: '/boards/:boardId/tasks' } );

router.get("/", async (ctx, next) => {
  ctx.body = await tasksService.getAll(ctx.params.boardId);
  ctx.set("Content-Type", "application/json");
  next();
});

router.get("/:taskId",async (ctx, next) => {
  ctx.body = await tasksService.getById(ctx.params.taskId);
  if (!ctx.body) {
    ctx.status = 404;
  }
  ctx.set("Content-Type", "application/json");
  next();
});

router.post("/", async (ctx, next) => {
  ctx.request.body.boardId = ctx.params.boardId;
  ctx.body = await tasksService.create(ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
  next();
});

router.put("/:taskId", async (ctx, next) => {
  ctx.body = await tasksService.update(ctx.params.taskId, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  next();
});

router.delete("/:taskId", async (ctx, next) => {
  await tasksService.delete_(ctx.params.taskId);
  ctx.status = 204;
  next();
});

module.exports = router.routes();