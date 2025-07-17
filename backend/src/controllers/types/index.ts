/**
* Basic JSON response for Controllers
* Los 'types' propios serán tipos complejos personalizados, de esta manera va a hacer mucho más
* fácil controlar qué es lo que nos va a devolver por ejemplo una promesa. En vez de devolvernos un objeto de tipo any.
*/

import { IUser } from "domain/interfaces/IUser";
import { IBook } from "domain/interfaces/IBook";


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