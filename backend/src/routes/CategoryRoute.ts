import express, {Request, Response} from "express";
import cors from 'cors';
import { CategoryController } from "../controllers/CategoryController"
import { LogInfo } from "../utils/logger";
import { verifyToken } from '../middlewares/verifyToken';
import { checkRole } from '../middlewares/checkRole';

let categoryRoute: express.Router = express.Router();
const controller = new CategoryController();

categoryRoute.route('/')
    .post(verifyToken, checkRole('admin'), cors(), async (req: Request, res: Response) => {
        try{
            let { name } = req.body;
            let cate: string = name.toString();
            let result: any = await controller.createCategory(cate);
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
            const result: any = await controller.getCategories(page, max, id);
            res.json(result);
        } catch (error){
            res.json(error);
        }
    })
    .delete(verifyToken, checkRole('admin'), cors(), async(req: Request, res: Response) => {
        try{
            let id: any = req?.query?.id;
            LogInfo(`Query param: ${id}`);
            const result: any = await controller.deleteCategory(id);
            res.json(result);
        } catch (error){
            res.json(error);
        }
    })
    .put(verifyToken, checkRole('admin'), cors(), async(req: Request, res: Response) => {
        try{
            let id: any = req?.query?.id;
            let { name } = req.body;
            LogInfo(`Query param: ${id}`);
            let result: any = await controller.updateCategory(id,{name});
            res.json(result);
        } catch (error){
            res.json(error);
        }
    })

export default categoryRoute;