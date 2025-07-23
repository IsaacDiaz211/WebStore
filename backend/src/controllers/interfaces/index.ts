import { Request, Response } from "express";
import { 
    BasicResponse, 
    PaginatedUserResponse,
    RegisterResponse,
    LoginResponse,
    RegisterInput,
    LoginInput,
    BookResponse,
    PaginatedBooksResponse,
    PaginatedCategoriesResponse,
    PaginatedPayMethodsResponse,
 } from "controllers/types";
import { IUser } from "domain/interfaces/IUser";
import { IBook } from "domain/interfaces/IBook";
import { ICategory } from "domain/interfaces/ICategory";
import { IPayMethod } from "domain/interfaces/IPayMethod";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    getUsers(page: number, limit: number, id?: string): Promise<PaginatedUserResponse | IUser | null>;
    getActiveUsers(page: number, limit: number): Promise<PaginatedUserResponse | null>;
    getDeletedUsers(page: number, limit: number): Promise<PaginatedUserResponse | null>;
    getUsersByRol(page: number, limit: number, role:string): Promise<PaginatedUserResponse | null>;
    deleteUser(id?: string): Promise<IUser | null>;
    updateUser(id: string, update: Partial<IUser>): Promise<IUser | null>;
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
    deleteBook(id: string): Promise<IBook | null>;
}

export interface ICategoryController{
    createCategory(name: string): Promise<ICategory | null>;
    getCategories(page: number, limit: number, id?: string): Promise<PaginatedCategoriesResponse | ICategory | null>;
    updateCategory(id: string, req: Request): Promise<ICategory | null>;
    deleteCategory(id: string): Promise<ICategory | null>;
    getActiveCategories(page: number, limit: number): Promise<PaginatedCategoriesResponse | null>;
    getDeletedCategories(page: number, limit: number): Promise<PaginatedCategoriesResponse | null>;
}

export interface IPayMethodController{
    createPayMethod(req: Request): Promise<IPayMethod | null>;
    getPayMethods(page: number, limit: number, id?: string): Promise<PaginatedPayMethodsResponse| IPayMethod | null>;
    updatePayMethod(id: string, req: Request): Promise<IPayMethod | null>;
    deletePayMethod(id: string): Promise<IPayMethod | null>;
    getActivePayMethods(page: number, limit: number): Promise <PaginatedPayMethodsResponse | IPayMethod | null>;
    getDeletedPayMethods(page: number, limit: number): Promise <PaginatedPayMethodsResponse | null>;
}

export interface ISaleController{}

export interface IConsultationController{}



export interface IReportController{}