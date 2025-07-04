/**
 * Root Router
 * Redirections to Routers
 */

import express from "express";
import  helloRouter from  './HelloRouter';
import  authRouter from  './AuthRouter';
import {LogInfo} from "../utils/logger";

let server = express();

let rootRouter: express.Router = express.Router();

rootRouter.get('/', (req: express.Request, res: express.Response) => {
    LogInfo('Get: http://localhost:8000/api/')
    res.send("Hello World!");
});

server.use('/', rootRouter);
server.use('/hello', helloRouter);
server.use('/auth', authRouter)

export default server;