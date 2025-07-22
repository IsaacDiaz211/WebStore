import express, {Request, Response} from "express";
import cors from 'cors';
import { PayMethodController } from "../controllers/PayMethodController"
import { LogInfo } from "../utils/logger";
import { verifyToken } from '../middlewares/verifyToken';
import { checkRole } from '../middlewares/checkRole';

let payMethodRoute: express.Router = express.Router();
const controller = new PayMethodController();

payMethodRoute.route('/')
    .post(verifyToken, checkRole('admin'), cors(), async (req: Request, res: Response) => {
        let result: any = await controller.createPayMethod(req);
        res.json(result);
    })
    .get(verifyToken, checkRole('admin'), cors(), async (req: Request, res: Response) => {
        let id: any = req?.query?.id;
        let page: any = req?.query.page || 1;
        let max: any = req?.query.page || 5;
        LogInfo(`Query param: ${id}`);
        const result: any = await controller.getPayMethods(page, max, id);
        res.json(result);
    })
    .delete(verifyToken, checkRole('admin'), cors(), async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param: ${id}`);
        const result: any = await controller.deletePayMethod(id);
        res.json(result);
    })
    .put(verifyToken, checkRole('admin'), cors(), async(req: Request, res: Response) => {
        let id: any = req?.query?.id;
        let {name, charge} = req.body;
        LogInfo(`Query param: ${id}`);
        let result: any = await controller.updatePayMethod(id,{name,charge});
        res.json(result);
    })

export default payMethodRoute;