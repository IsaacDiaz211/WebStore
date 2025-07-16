import { Request, Response } from "express";
import { BasicResponse, PaginatedUserResponse, RegisterResponse, LoginResponse, RegisterInput, LoginInput } from "controllers/types";
import { IUser } from "domain/interfaces/IUser";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    getUsers(page: number, limit: number, id?: string): Promise<PaginatedUserResponse | IUser | null>;
    getActiveUsers(page: number, limit: number): Promise<PaginatedUserResponse | null>;
    getDeletedUsers(page: number, limit: number): Promise<PaginatedUserResponse | null>;
    getUsersByRol(page: number, limit: number, role:string): Promise<PaginatedUserResponse | null>;
    deleteUser(id?: string): Promise<IUser | null>;
    updateUser(id: string, req: Request): Promise<IUser | null>;
}

export interface IAuthController {
    login(body: LoginInput): Promise<LoginResponse>;
    register(body: RegisterInput): Promise<RegisterResponse>;
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