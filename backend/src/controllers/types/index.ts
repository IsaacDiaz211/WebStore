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

export type AuthResponse = {
    message: string,
    token: string
}

export type PaginatedUserResponse = {
    users: IUser[],
    totalPages: number,
    currentPage: number
}

export type BookResponse = {
    books: IBook[],
    totalPages: number,
    currentPage: number
}