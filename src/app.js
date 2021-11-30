const Koa = require('koa');
const path = require('path');
const YAML = require('yamljs');
const { koaSwagger } = require('koa2-swagger-ui');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');

const router = new Router();

const app = new Koa();
const spec = YAML.load(path.join(__dirname, '../doc/api.yaml'));

// app.use(express.json());
app.use(bodyParser());


app.use(
  koaSwagger({
    routePrefix: '/doc',
    swaggerOptions: { swaggerDocument: spec },
  }),
);

router.get('/', (ctx, next) => {
  if (ctx.originalUrl === '/') {
    ctx.body = 'Service is running!';
    return;
  }
  next();
});

app.use(router.routes());
app.use(userRouter);
app.use(boardRouter);
app.use(taskRouter);

module.exports = app;
