const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { errorHandler } from './middlewares/error-handler';
import applicationController from './controllers/ApplicationController';
import { getPath } from './utils/path';
import connectMongoDB from './utils/db';
import mongoConfig from './config/db';
import fs from 'fs';

global.__dirname;

const router = new Router();
// response
router.post('/applications', applicationController.createApplication);

const dir = getPath('../../applications');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// connectMongoDB(
//     `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`
// ).catch((err) => console.log(err));

app.use(errorHandler)
    .use(bodyParser())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(process.env.PORT || 33000);
