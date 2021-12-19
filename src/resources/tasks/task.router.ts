import * as Router from 'koa-router';
import { IRouterParamContext } from 'koa-router';
import { ExtendableContext, Next } from 'koa';
import * as tasksService from './task.service';

export const router = new Router( { prefix: '/boards/:boardId/tasks' } );

router.get("/", async (ctx: IRouterParamContext & ExtendableContext, next: Next) => {
  ctx.body = await tasksService.getAll(ctx.params.boardId);
  ctx.set("Content-Type", "application/json");
  await next();
});

router.get("/:taskId",async (ctx: IRouterParamContext & ExtendableContext, next: Next) => {
  ctx.body = await tasksService.getById(ctx.params.taskId);
  if (!ctx.body) {
    ctx.status = 404;
  }
  ctx.set("Content-Type", "application/json");
  await next();
});

router.post("/", async (ctx: IRouterParamContext & ExtendableContext, next: Next) => {
  ctx.request.body.boardId = ctx.params.boardId;
  ctx.body = await tasksService.create(ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
  await next();
});

router.put("/:taskId", async (ctx: IRouterParamContext & ExtendableContext, next: Next) => {
  ctx.body = await tasksService.update(ctx.params.taskId, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  await next();
});

router.delete("/:taskId", async (ctx: IRouterParamContext & ExtendableContext, next: Next) => {
  await tasksService.delete_(ctx.params.taskId);
  ctx.status = 204;
  await next();
});
