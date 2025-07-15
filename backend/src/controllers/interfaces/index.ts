import {BasicResponse} from "controllers/types";
import { Request, Response } from "express";
//import { IBook } from "/domain/interfaces/IBook";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    getUsers(page: number, limit: number, id?: string): Promise<any>;
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

export interface IBookController{
    createBook(req: Request, res: Response): Promise<any>;
    getBooks(page: number, limit: number, id?: string): Promise<any>;
}

export interface ICategoryControllerq{}

export interface ISaleController{}

export interface IConsultationController{}

export interface IPayController{}

export interface IReportController{}