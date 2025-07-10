import express, {Request, Response} from "express";
import {UserController} from "../controllers/UserController"
import {LogInfo} from "../utils/logger";

let userRouter: express.Router = express.Router();

userRouter.route('/')
    .get(async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param: ${id}`)
        const controller: UserController = new UserController();
        const response: any = await controller.getUsers(id);
        res.send(response);
    })
    .delete(async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param: ${id}`)
        const controller: UserController = new UserController();
        const response: any = await controller.deleteUser(id);
        res.send(response);
    })
export default userRouter;