const Router = require('@koa/router');
const boardsService = require('./board.service');

const router = new Router( { prefix: '/boards' } );

router.get("/", async (ctx, next) => {
  ctx.body = await boardsService.getAll();
  next();
});

router.get("/:boardId",async (ctx, next) => {
  ctx.body = await boardsService.getById(ctx.params.boardId);
  next();
});

router.post("/", async (ctx, next) => {
  ctx.body = await boardsService.create(ctx.request.body);
  ctx.status = 201;
  next();
});

router.put("/:boardId", async (ctx, next) => {
  ctx.body = await boardsService.update(ctx.params.boardId, ctx.request.body);
  next();
});

router.delete("/:boardId", async (ctx, next) => {
  await boardsService.delete_(ctx.params.boardId);
  ctx.status = 204;
  next();
});

module.exports = router.routes();