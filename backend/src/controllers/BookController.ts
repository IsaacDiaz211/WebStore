import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from "tsoa";
import { Request, Response } from "express";
import { BookResponse, PaginatedBooksResponse } from "../controllers/types/index";
import { IBookController } from "../controllers/interfaces";
import { IBook } from "domain/interfaces/IBook";
import { LogError, LogInfo, LogSuccess } from "../utils/logger";
import { BookRepository } from '../domain/repositories/BookRepository';
import { uploadToCloudinary } from "../utils/cloudinaryUpload";

@Route("/api/books")
@Tags("BookController")

export class BookController extends Controller implements IBookController{
    private bookRepo: BookRepository;

    constructor() {
        super();
        this.bookRepo = new BookRepository();
    }

    /**
     * 
     * @param { Request } req 
     * @returns 
     */
    @Post("/")
    public async createBook(@Body() req: Request): Promise<BookResponse> {
        try{
            LogInfo('Creating a book');
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
                this.setStatus(400);
                return { 
                    book: null,
                    id: null,
                    message: 'La portada (imageCover) es requerida'
                };
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
            this.setStatus(201);
            return { 
                book: newBook,
                id: newBook._id?.toString() || null,
                message: 'Book created successfully'
            };
        } catch (error) {
            LogError('in: ' + JSON.stringify(error));
            return { 
                    book: null,
                    id: null,
                    message: 'Error creating book'
            };
        }
    }

    /**
     * 
     * @param { number } page 
     * @param { number } limit 
     * @param { string } id 
     * @returns 
     */
    @Get("/")
    public async getBooks(
        @Query() page: number,
        @Query() limit: number,
        @Path() id?: string
    ): Promise<PaginatedBooksResponse | BookResponse | null> {
        try{
            LogInfo('Getting all books');
            if(id){
                LogSuccess('Getting book by id');
                this.setStatus(200);
                return {
                    book: await this.bookRepo.findById(id),
                    id: id,
                    message: 'Book found successfully'
                }
            } else {
                LogSuccess('Getting all books');
                this.setStatus(200);
                return await this.bookRepo.findAll(page, limit);
            }
        } catch (error){
            LogError('in:'+ JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }

    /**
     * 
     * @param { number } page 
     * @param { number } limit  
     * @returns 
     */
    @Get("/active" )
    public async getActiveBooks(
        @Query() page: number,
        @Query() limit: number,
    ): Promise <PaginatedBooksResponse | null> {
        try{
            LogInfo('Getting all active books');
            this.setStatus(200);
            return await this.bookRepo.findActiveBooks(page, limit);
        } catch (error){
            LogError('in:'+ JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }
    /**
     * 
     * @param { number } page 
     * @param { number } limit 
     * @returns 
     */
    @Get("/deleted")
    public async getDeletedBooks(
        @Query() page: number,
        @Query() limit: number,
    ): Promise<PaginatedBooksResponse | null> {
        try{
            LogInfo('Getting all deleted books');
            this.setStatus(200);
            return await this.bookRepo.findDeletedBooks(page, limit);
        } catch (error){
            LogError('in:'+ JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }
    /**
     *
     * @param { number } page
     * @param { number } limit
     * @param { string } category
     * @returns
     */
    @Get("/category/{category}")
    public async getBooksByCategory(
        @Query() page: number,
        @Query() limit: number,
        @Path() category: string
    ): Promise<PaginatedBooksResponse | null>{
        try{
            LogInfo('Getting all books by category');
            this.setStatus(200);
            return await this.bookRepo.findBooksByCategory(category, page, limit);
        } catch (error){
            LogError('in:'+ JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }

    /**
     *
     * @param { string } id
     * @param { Partial<IBook> } update
     * @returns
     */
    @Put("/{id}")
    public async updateBook(
        @Path() id: string,
        @Body() update: Partial<IBook>
    ): Promise<IBook | null>{
        try{
            LogInfo('Updating book');
            this.setStatus(200);
            return await this.bookRepo.updateBook(id, update);
        } catch (error) {
            LogError('in:'+ JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }

    /**
     *
     * @param { string } id
     * @returns
     */
    @Delete("/{id}")
    public async deleteBook(@Path() id: string): Promise<IBook | null> {
        try{
            LogInfo('Deleting book');
            this.setStatus(200);
            return await this.bookRepo.deleteBookById(id);
        } catch (error){
            LogError('in:'+ JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }
}