'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const Cors = require('koa2-cors');
const BodyParser = require('koa-bodyparser');
const pkg = require('./package.json');
const utils = require('./utils');

// Create koa webserver.
const app = new Koa();

// Always enable CORS for statics or apis.
app.use(Cors());

///////////////////////////////////////////////////////////////////////////////////////////
//   API sections.
///////////////////////////////////////////////////////////////////////////////////////////
// !!! Start body-parser after proxies, see https://github.com/vagusX/koa-proxies/issues/55
// Start body-parser only for APIs, which requires the body.
app.use(BodyParser());

const router = new Router();

router.all('/edu/v1/versions', async (ctx) => {
  ctx.body = utils.asResponse(0, {version: pkg.version});
});

app.use(router.routes());

app.listen(15000, () => {
  console.log(`Server start on http://localhost:15000`);
});

