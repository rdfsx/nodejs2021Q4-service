import * as Router from 'koa-router';
import * as boardsService from './board.service';

export const router = new Router( { prefix: '/boards' } );

router.get("/", async (ctx, next) => {
  ctx.body = await boardsService.getAll();
  ctx.set("Content-Type", "application/json");
  await next();
});

router.get("/:boardId",async (ctx, next) => {
  ctx.body = await boardsService.getById(ctx.params.boardId);
  if (!ctx.body) {
    ctx.status = 404;
  }
  ctx.set("Content-Type", "application/json");
  await next();
});

router.post("/", async (ctx, next) => {
  ctx.body = await boardsService.create(ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
  await next();
});

router.put("/:boardId", async (ctx, next) => {
  ctx.body = await boardsService.update(ctx.params.boardId, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  await next();
});

router.delete("/:boardId", async (ctx, next) => {
  await boardsService.delete_(ctx.params.boardId);
  ctx.set("Content-Type", "application/json");
  ctx.status = 204;
  await next();
});
