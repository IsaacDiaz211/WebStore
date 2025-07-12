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
        res.status(200).send(response);
    })
    .delete(async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param: ${id}`)
        const controller: UserController = new UserController();
        const response: any = await controller.deleteUser(id);
        res.status(204).send(response);
    })
    .post(async(req: Request, res: Response) => {
        const controller: UserController = new UserController();
        let response: any = await controller.createUser(req);
        res.status(201).send(response);
    })
    .put(async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param: ${id}`)
        const controller: UserController = new UserController();
        let response: any = await controller.updateUser(id,req);
        res.status(204).send(response);
    })
export default userRouter;

/**
 * Get documents => 200 ok
 * Creation document => 201 ok
 * Deletion document => 200 ok  | 204 (no return)
 * Update document => 200 ok
 * 
 */