import express, {Request, Response} from "express";
import { UserController } from "../controllers/UserController"
import { LogInfo } from "../utils/logger";
import { verifyToken } from '../middlewares/verifyToken';
import { checkRole } from '../middlewares/checkRole';

let userRouter: express.Router = express.Router();

userRouter.route('/')
    .get(verifyToken, checkRole('admin'), async (req: Request, res: Response) => {
        let id: any = req?.query?.id;
        let page: any = req?.query.page || 1;
        let max: any = req?.query.page || 5;
        LogInfo(`Query param: ${id}`)
        const controller: UserController = new UserController();
        const response: any = await controller.getUsers(page, max, id);
        res.status(200).send(response);
    })
    .delete(verifyToken, checkRole('admin'), async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param: ${id}`)
        const controller: UserController = new UserController();
        const response: any = await controller.deleteUser(id);
        res.status(204).send(response);
    })
    .put(verifyToken, checkRole('admin'), async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param: ${id}`)
        const controller: UserController = new UserController();
        let response: any = await controller.updateUser(id,req);
        res.status(204).send(response);
    })
export default userRouter;