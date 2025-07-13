import {BasicResponse} from "controllers/types"
import { Request, Response } from "express";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    getUsers(id?: string): Promise<any>;
    getActiveUsers(): Promise<any>;
    getDeleteUSers(): Promise<any>;
    getUserByRol(role:string): Promise<any>;
    deleteUser(id?: string): Promise<any>;
    updateUser(id: string, req: Request): Promise<any>;
}

export interface IAuthController {
    login(req: Request, res: Response): Promise<any>;
    register(req: Request, res: Response): Promise<any>;
}