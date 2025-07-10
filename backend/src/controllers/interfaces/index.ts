import {BasicResponse} from "controllers/types"
import { Request, Response } from "express";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    getUsers(id?: string): Promise<any>;
    deleteUser(id?: string): Promise<any>;
    createUser(req: Request): Promise<any>;
}