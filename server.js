import Koa from 'koa';

import React from 'react';
import { renderToString } from 'react-dom/server';
import views from 'koa-views';
import path from 'path';

import Main from './main';

const app = new Koa();

app.use(require('koa-static')(path.resolve(__dirname, './public')));
app.use(views(path.resolve(__dirname, './views'), {map: {html: 'ejs'}}))

app.use( async ctx => {
  const str = renderToString(<Main />);
  await ctx.render('index', {root: str});
})

app.listen(3000);
console.log('3000')