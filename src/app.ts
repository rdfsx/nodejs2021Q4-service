import { koaSwagger } from 'koa2-swagger-ui';
import * as Router from 'koa-router';
import * as path from 'path';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as YAML from 'yamljs';
import { router as boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';
import { router as userRouter } from './resources/users/user.router';


const router = new Router();

export const app = new Koa();
const spec = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(bodyParser());


app.use(
  koaSwagger({
    routePrefix: '/doc',
    swaggerOptions: { swaggerDocument: spec },
  }),
);

router.get('/', async (ctx, next) => {
  if (ctx.originalUrl === '/') {
    ctx.body = 'Service is running!';
    return;
  }
  await next();
});

app.use(router.routes());
app.use(userRouter.routes());
app.use(boardRouter.routes());
app.use(taskRouter.routes());
