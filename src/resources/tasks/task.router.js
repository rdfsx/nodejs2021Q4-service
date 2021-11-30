const Router = require('@koa/router');
const tasksService = require('./task.service');

const router = new Router( { prefix: '/boards/:boardId/tasks' } );

router.get("/", async (ctx, next) => {
  ctx.body = await tasksService.getAll();
  next();
});

router.get("/:taskId",async (ctx, next) => {
  ctx.body = await tasksService.getById(ctx.params.taskId);
  next();
});

router.post("/", async (ctx, next) => {
  ctx.body = await tasksService.create(ctx.request.body);
  next();
});

router.put("/:taskId", async (ctx, next) => {
  ctx.body = await tasksService.update(ctx.params.taskId, ctx.request.body);
  next();
});

router.delete("/:taskId", async (ctx, next) => {
  await tasksService.delete_(ctx.params.taskId);
  ctx.status = 204;
  next();
});

module.exports = router.routes();