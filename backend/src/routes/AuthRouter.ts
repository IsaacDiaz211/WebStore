import express, { Request, Response } from "express";
import {AuthController} from "../controllers/AuthController"
import cors from 'cors';
import {LogInfo} from "../utils/logger";
import { RegisterInput, LoginInput } from "../controllers/types";

let authRouter: express.Router = express.Router();
const controller = new AuthController();

authRouter.post('/register', cors(), async (req: Request, res: Response): Promise<void> => {
    try{
        const { name, lastname, email, password, role } = req.body;
        LogInfo(`Email: ${email}, Password: ${password}`);
        const result = await controller.register({ name, lastname, email, password, role } as RegisterInput);
        res.json(result);
    } catch (error){

    }
    
})
// Habilita CORS específicamente para /login
authRouter.post('/login', cors(), async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        LogInfo(`Email: ${email}, Password: ${password}`);
        const result = await controller.login({ email, password } as LoginInput);
        res.json(result);
    } catch (error){
        res.status(500).json({ message: "Error interno en /login" });
    }
});

export default authRouter;