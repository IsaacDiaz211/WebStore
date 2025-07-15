import express, { Request, Response } from "express";
import {AuthController} from "../controllers/AuthController"
import cors from 'cors';
//import {LogInfo} from "../utils/logger";

let authRouter: express.Router = express.Router();
const controller = new AuthController();


authRouter.route('/register')
    .post(async(req: Request, res: Response) => {
        controller.register(req, res);
    });
authRouter.route('/login')
   .post(async(req: Request, res: Response) => {
        controller.login(req, res);
    });

// Habilita CORS específicamente para /login
//router.post('/login', cors(), authController.login); <- así me dice Deepseek pero así no funciona
authRouter.post('/login', cors(), (req: Request, res: Response) => {
    controller.login(req, res);
});

authRouter.get('/test', (req, res) => {
  res.send('¡Ruta de prueba funciona!');
});
export default authRouter;