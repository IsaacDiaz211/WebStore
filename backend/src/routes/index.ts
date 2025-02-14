/**
 * Root Router
 * Redirections to Routers
 */

import express, {Request, Response} from "express";
import  helloRouter from  './HelloRouter';
import {LogInfo} from "../utils/logger";

let server = express();

let rootRouter: express.Router = express.Router();

rootRouter.get('/', (req: express.Request, res: express.Response) => {
    LogInfo('Get: http://localhost:8000/api/')
    res.send("Hello World!");
});

server.use('/', rootRouter);
server.use('/hello', helloRouter);

export default server;