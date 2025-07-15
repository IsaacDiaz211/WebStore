import { Delete, Get, Post, Query, Route, Tags} from "tsoa";
import { Request, Response } from "express";
import { BasicResponse } from "../controllers/types/index";
import { IBookController } from "../controllers/interfaces";
import { LogError, LogInfo } from "../utils/logger";
import { BookRepository } from '../domain/repositories/BookRepository';
import { uploadToCloudinary } from "../utils/cloudinaryUpload";

@Route("/api/books")
@Tags("BookController")

export class BookController implements IBookController{
    private bookRepo: BookRepository;

    constructor() {
        this.bookRepo = new BookRepository();
    }
    @Post("/")
    public async createBook(req: Request, res: Response): Promise<any> {
        try{
            LogInfo(`Entramos al try`);
            const { title, price, stock } = req.body;
            const file = req.file;
            if (!file) {
                return res.status(400).json({ message: "Imagen requerida" });
            }
            const result = await uploadToCloudinary(file.buffer, 'books');
            const newBook = await this.bookRepo.create({
                title, 
                price, 
                stock, 
                imageCover: result.secure_url});
            return res.status(201).json({book: newBook._id, title});
        } catch (error) {
            //Reemplazar por LogError
            LogError('Error en el controller: ' + JSON.stringify(error));
            return res.status(500).json({message: "Error al crear el libro"});
        }
        
    }
    @Get("/")
    public async getBooks(page: number, limit: number, id?: string): Promise<any> {
        let response: any = "";
        response = await this.bookRepo.findAll(page, limit);
        return response;
    }
}