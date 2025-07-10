import express, {Request, Response} from "express";
import {UserController} from "../controllers/UserController"
import {LogInfo} from "../utils/logger";

let userRouter: express.Router = express.Router();

userRouter.route('/')
    .get(async(req: Request, res: Response) => {
        const controller: UserController = new UserController();
        const response: any = await controller.getUsers();
        res.send(response);
    })
export default userRouter;