import express, {Request, Response} from "express";
import cors from 'cors';
import { UserController } from "../controllers/UserController"
import { LogInfo } from "../utils/logger";
import { verifyToken } from '../middlewares/verifyToken';
import { checkRole } from '../middlewares/checkRole';

let userRouter: express.Router = express.Router();
const controller: UserController = new UserController();

userRouter.route('/')
    .get(verifyToken, checkRole('admin'), cors(), 
        async (req: Request, res: Response) => {
            try{
                let id: any = req?.query?.id;
                let page: any = req?.query.page || 1;
                let max: any = req?.query.page || 5;
                LogInfo(`Query param: ${id}`);
                const result: any = await controller.getUsers(page, max, id);
                res.json(result);
            } catch (error){
                res.json(error);
            }
    })
    // /users?id=htcghc7dhcg
    .delete(verifyToken, async(req: Request, res: Response) => {
        try{
            let id: any = req?.query?.id;
            LogInfo(`Query param: ${id}`);
            const result: any = await controller.deleteUser(id);
            let message: string = `User ${result._id} deleted`;
            res.json(message);
        } catch (error){
            res.json(error);
        }
    })
    .put(verifyToken, async(req: Request, res: Response) => {
        try{
            let id: any = req?.query?.id;
            let { name, lastname, email, password, role } = req.body;
            LogInfo(`Query param: ${id}`);
            let result: any = await controller.updateUser(id,{name, lastname, email, password, role});
            res.json(result);
        } catch (error){
            res.json(error);
        }
    });

userRouter.route('/active')
    .get(verifyToken, async(req: Request, res: Response) => {
        try{
            let page: any = req?.query.page || 1;
            let max: any = req?.query.page || 5;
            const result: any = await controller.getActiveUsers(page, max);
            res.json(result);
        } catch (error){
            res.json(error);
        }
    });
userRouter.route('/deleted')
    .get(verifyToken, async(req: Request, res: Response) => {
        try{
            let page: any = req?.query.page || 1;
            let max: any = req?.query.page || 5;
            const result: any = await controller.getDeletedUsers(page, max);
            res.json(result);
        } catch (error){
            res.json(error);
        }
    });
export default userRouter;