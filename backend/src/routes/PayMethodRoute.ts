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
        try{
            let result: any = await controller.createPayMethod(req);
            res.json(result);
        } catch (error){
            res.json(error);
        } 
    })
    .get(verifyToken, checkRole('admin'), cors(), async (req: Request, res: Response) => {
        try{
            let id: any = req?.query?.id;
            let page: any = req?.query.page || 1;
            let max: any = req?.query.page || 5;
            LogInfo(`Query param: ${id}`);
            const result: any = await controller.getPayMethods(page, max, id);
            res.json(result);
        } catch (error){
            res.json(error);
        }
    })
    .delete(verifyToken, checkRole('admin'), cors(), async(req: Request, res: Response) => {
        try{
            let id: any = req?.query?.id;
            LogInfo(`Query param: ${id}`);
            const result: any = await controller.deletePayMethod(id);
            res.json(result);
        } catch (error){
            res.json(error);
        }
    })
    .put(verifyToken, checkRole('admin'), cors(), async(req: Request, res: Response) => {
        try {
            let id: any = req?.query?.id;
            let {name, charge} = req.body;
            LogInfo(`Query param: ${id}`);
            let result: any = await controller.updatePayMethod(id,{name,charge});
            res.json(result);
        } catch (error){
            res.json(error);
        }
        
    })

export default payMethodRoute;