import express, { Request, Response } from "express";
import { upload } from '../middlewares/upload';
import { BookController } from '../controllers/BookController';
import { LogInfo } from "../utils/logger";

let bookRoute: express.Router = express.Router();
const controller = new BookController();

bookRoute.route('/')
    .post(upload.fields([
        { name: 'imageCover', maxCount: 1 },
        { name: 'imageBack', maxCount: 1 }]),
        async(req: Request, res: Response): Promise<void> => {
            LogInfo('Llegamos al router');
            const result = controller.createBook(req);
            res.json(result);
        }
    );


export default bookRoute;