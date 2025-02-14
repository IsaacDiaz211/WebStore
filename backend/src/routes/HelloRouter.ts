import express, {Request, Response} from "express";
import {HelloController} from "../controllers/HelloController"
import {LogInfo} from "../utils/logger";

let helloRouter: express.Router = express.Router();

helloRouter.route('/')
    .get(async(req: Request, res: Response) => {
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        const controller: HelloController = new HelloController();
        const response = await controller.getMessage(name);
        res.send(response);
    })
export default helloRouter;