import express, { Request, Response } from "express";
import {AuthController} from "../controllers/AuthController"
import cors from 'cors';
import {LogInfo} from "../utils/logger";

let authRouter: express.Router = express.Router();
const controller = new AuthController();


/*authRouter.route('/register')
    .post(async(req: Request, res: Response) => {
        controller.register(req);
    });
authRouter.route('/login')
   .post(async(req: Request, res: Response) => {
        controller.login(req);
    });
*/
// Habilita CORS específicamente para /login
//router.post('/login', cors(), authController.login); <- así me dice Deepseek pero así no funciona
authRouter.post('/login', cors(), (req: Request, res: Response) => {
    const { email, password } = req.body;
    LogInfo(`Email: ${email}, Password: ${password}`);
    controller.login({ email, password });
});

authRouter.get('/test', (req, res) => {
  res.send('¡Ruta de prueba funciona!');
});
export default authRouter;