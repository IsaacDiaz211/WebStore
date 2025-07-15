import { Delete, Get, Post, Query, Route, Tags} from "tsoa";
import { Request, Response } from "express";
import { BasicResponse } from "../controllers/types/index";
import { IBookController } from "../controllers/interfaces";
import { LogSuccess } from "../utils/logger";
import { BookRepository } from '../domain/repositories/BookRepository';
import { IBook } from "../domain/interfaces/IBook";

@Route("/api/books")
@Tags("BookController")

export class BookController implements IBookController{
    private bookRepo: BookRepository;

    constructor() {
        this.bookRepo = new BookRepository();
    }

    public async createBook(req: IBook, res: Response): Promise<any> {
        const { title, price, stock, imageCover } = req;
        const newBook = await this.bookRepo.createBook({title, price, stock, imageCover});
        return res.status(201).json({book: newBook._id, title});
    }
    public async getBooks(page: number, limit: number, id?: string): Promise<any> {
        let response: any = "";
        response = await this.bookRepo.findAll(page, limit);
        return response;
    }
}