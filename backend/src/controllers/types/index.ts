import { IUser } from "domain/interfaces/IUser";
import { IBook } from "domain/interfaces/IBook";
import { ICategory } from "domain/interfaces/ICategory";
import { IPayMethod } from "domain/interfaces/IPayMethod";


export type BasicResponse = {
    message: string;
}

export type ErrorResponse = {
    error: string,
    message: string
}

export type LoginInput = {
    email: string;
    password: string;
}
// Response type for login operations
export type LoginResponse = {
    message: string,
    token: string | null
}

export interface RegisterInput {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
}
// Response type for register operations
export type RegisterResponse ={
    message: string,
    user: IUser | null
}

export type PaginatedUserResponse = {
    users: IUser[],
    totalPages: number,
    currentPage: number
}

export type BookResponse = {
    book: IBook | null,
    id: string | null,
    message: string
}
export type PaginatedBooksResponse = {
    books: IBook[],
    totalPages: number,
    currentPage: number
}

export type PaginatedCategoriesResponse = {
    categories: ICategory[],
    totalPages: number,
    currentPage: number
}

export type PaginatedPayMethodsResponse = {
    payMethods: IPayMethod[] | null,
    totalPages: number,
    currentPage: number
}