import express, { Request, Response } from "express";
import { upload } from '../middlewares/upload';
import { BookController } from '../controllers/BookController';
import { LogInfo } from "../utils/logger";
import { verifyToken } from '../middlewares/verifyToken';
import { checkRole } from '../middlewares/checkRole';
import cors from 'cors';

let bookRoute: express.Router = express.Router();
const controller = new BookController();

bookRoute.route('/')
    .post(verifyToken, checkRole('admin'), cors(), upload.fields([
        { name: 'imageCover', maxCount: 1 },
        { name: 'imageBack', maxCount: 1 }]),
        async(req: Request, res: Response): Promise<void> => {
            try{
                const result = controller.createBook(req);
                res.json((await result).message);
            } catch (error){
                res.json(error);
            }   
        }
    )
    .get(verifyToken, checkRole('admin'), cors(),
        async(req: Request, res: Response): Promise<void> => {
            try{
                let id: any = req?.query?.id;
                let page: any = req?.query.page || 1;
                let max: any = req?.query.page || 5;
                const result = await controller.getBooks(page, max, id);
                res.json(result);
            } catch (error){
                res.json(error);
            }
        }
    )
    .put(verifyToken, checkRole('admin'), cors(),
        async(req: Request, res: Response): Promise<void> => {
            try{
                let id: any = req?.query?.id;
                let update = req.body;
                const result = await controller.updateBook(id, update);
                res.json(result);
            } catch (error){
                res.json(error);
            }
        }
    )
    .delete(verifyToken, checkRole('admin'), cors(),
        async(req: Request, res: Response): Promise<void> => {
            try{
                let id: any = req?.query?.id;
                const result = await controller.deleteBook(id);
                res.json(result);
            } catch (error){
                res.json(error);
            }
        }
    )

export default bookRoute;