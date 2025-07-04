import express, {Request, Response} from "express";
import {AuthController} from "../controllers/AuthController"
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
export default authRouter;