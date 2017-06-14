require('babel-register')
const http = require('http')
const Koa = require('koa');
const Router = require('koa-router');
const Pug = require('koa-pug');
const koaServe = require('koa-static');
const serve = require('koa-better-serve');


const app = new Koa();
const Convert = require('./html/static');


app.use(koaServe(`${__dirname}/build`));

app.use(async (ctx, next) => {
  console.log(ctx.path)
  if (ctx.body) {
    return;
  }
  await next();
});

app.use(async (ctx, next) => {
  if (ctx.path.includes('staticPageExample')) {
    const htmlStr = require('./staticPageExample').default;
    ctx.body = Convert({
      path: 'staticPageExample',
      html: htmlStr
    });
    return;
  }
  await next();
});

app.use(async (ctx, next) => {
  if (ctx.path.includes('withFeRouter')) {
    const getHtmlStr = require('./withFeRouter').default;
    const { context, markup } = getHtmlStr(ctx.url);
    console.log('ctx', context);
    if (context.url) {
      ctx.redirect(context.url);
      ctx.status = context.status;
      return;
    }

    ctx.body = Convert({
      path: 'withFeRouter',
      html: markup
    });
    return;
  }
  await next();
});

http.createServer(app.callback()).listen(3000);










