/**
 * Root Router
 * Redirections to Routers
 */

import express from "express";
import helloRouter from  './HelloRouter';
import authRouter from  './AuthRouter';
import {LogInfo} from "../utils/logger";
import userRouter from "./UserRoute";
import bookRoute from "./BookRoute";
import categoryRoute from "./CategoryRoute";
import payMethodRoute from "./PayMethodRoute";

let server = express();

let rootRouter: express.Router = express.Router();

rootRouter.get('/', (req: express.Request, res: express.Response) => {
    LogInfo('Get: http://localhost:8000/api/')
    res.send("Hello World!");
});
//console.log('Rutas cargadas: /auth/register, /auth/login');
server.use('/', rootRouter);
server.use('/hello', helloRouter);
server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/books', bookRoute);
server.use('/categories', categoryRoute);
server.use('/paymethods', payMethodRoute);

export default server;