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
            const { title, price, description, author, editorial, language, stock } = req.body;
            const categories = req.body.categories.split(',');
            /* otra opcíon a revisar:
                const rawCategories = req.body.categories;
                const categories = typeof rawCategories === 'string'
                ? rawCategories.split(',').map(id => id.trim())
                : [];
            */
            const files = req.files as { [fieldname: string]: Express.Multer.File[] };

            if (!files.imageCover || files.imageCover.length === 0) {
                return res.status(400).json({ message: 'La portada (imageCover) es requerida' });
            }
            // Subida obligatoria de portada
            const coverResult = await uploadToCloudinary(files.imageCover[0].buffer);

            // Subida opcional de contratapa
            let backResultUrl: string | undefined = undefined;
            if (files.imageBack && files.imageBack.length > 0) {
                const backResult = await uploadToCloudinary(files.imageBack[0].buffer);
                backResultUrl = backResult.secure_url;
            }
            const newBook = await this.bookRepo.create({
                title, 
                price,
                description,
                author,
                editorial,
                language,
                stock,
                categories,
                imageCover: coverResult.secure_url,
                imageBack: backResultUrl
            });
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