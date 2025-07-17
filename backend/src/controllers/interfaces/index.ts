import { Request, Response } from "express";
import { BasicResponse, PaginatedUserResponse, RegisterResponse, LoginResponse, RegisterInput, LoginInput, BookResponse, PaginatedBooksResponse } from "controllers/types";
import { IUser } from "domain/interfaces/IUser";
import { IBook } from "domain/interfaces/IBook";

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
    createBook(req: Request): Promise<BookResponse>;
    getBooks(page: number, limit: number, id?: string): Promise<PaginatedBooksResponse | BookResponse | null>;
    getActiveBooks(page: number, limit: number): Promise<PaginatedBooksResponse | null>;
    getDeletedBooks(page: number, limit: number): Promise<PaginatedBooksResponse | null>;
    getBooksByCategory(page: number, limit: number, category:string): Promise<PaginatedBooksResponse | null>;
    updateBook(id: string, req: Request): Promise<IBook | null>;
    deleteBook(id?: string): Promise<IBook | null>;
}

export interface ICategoryControllerq{}

export interface ISaleController{}

export interface IConsultationController{}

export interface IPayController{}

export interface IReportController{}