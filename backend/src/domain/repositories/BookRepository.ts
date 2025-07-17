import { PaginatedBooksResponse, BookResponse } from 'controllers/types';
import { Book } from '../entities/Book';
import { IBook } from '../interfaces/IBook';
import { Types } from 'mongoose';
import Partial  from 'mongoose';

export class BookRepository {
    async create(bookData: Partial<IBook>) {
        console.log(`[BookRepository]: Creating book`);
        const book = new Book(bookData);
        return await book.save();
    }

    public async findAll(page: number, max: number) {
        let response: PaginatedBooksResponse = {
            books: [],
            totalPages: 1,
            currentPage: page
        };
        await Book.find()
            .limit(max)
            .skip((page - 1) * max)
            .exec().then((books: IBook[]) => {
                response.books = books;
            });
        await Book.countDocuments().exec().then((count: number) => {
            let totalPages = Math.ceil(count / max);
            let currentPage = page;
            response.totalPages = totalPages;
            response.currentPage = currentPage;
        });
        return response;
    }
    public async findById(id: string) {
        return await Book.findById(id);
    }
    public async findActiveBooks(page: number, max: number){
        let response: PaginatedBooksResponse = {
            books: [],
            totalPages: 1,
            currentPage: page
        };
        await Book.find({deleted: false})
        .limit(max)
        .skip((page - 1) * max)
        .exec().then((books: IBook[]) => {
            response.books = books;
        });
        await Book.countDocuments().exec().then((count: number) => {
            let totalPages = Math.ceil(count / max);
            let currentPage = page;
            response.totalPages = totalPages;
            response.currentPage = currentPage;
        });
        return response;
    }
    public async findDeletedBooks(page: number, max: number){
        let response: PaginatedBooksResponse = {
            books: [],
            totalPages: 1,
            currentPage: page
        };
        await Book.find({deleted: true})
       .limit(max)
       .skip((page - 1) * max)
       .exec().then((books: IBook[]) => {
           response.books = books;
       });
       await Book.countDocuments().exec().then((count: number) => {
           let totalPages = Math.ceil(count / max);
           let currentPage = page;
           response.totalPages = totalPages;
           response.currentPage = currentPage;
       });
       return response;
    }
    public async findBooksByCategory(categorie: string, page: number, max: number){
        const categorieId = new Types.ObjectId(categorie);
        let response: PaginatedBooksResponse = {
            books: [],
            totalPages: 1,
            currentPage: page
        };
        // manejo para buscar un valor en un array en mongodb
        await Book.find({categories: categorieId})
            .limit(max)
            .skip((page - 1) * max)
            .exec().then((books: IBook[]) => {
                response.books = books;
            });
       await Book.countDocuments().exec().then((count: number) => {
           let totalPages = Math.ceil(count / max);
           let currentPage = page;
           response.totalPages = totalPages;
           response.currentPage = currentPage;
       });
       return response;
    }
    
    public async updateBook(id: string, bookData: Partial<IBook>){
        return await Book.findByIdAndUpdate(id, bookData);
    }

    public async deleteBookById(id: string){
        let book = await Book.findById(id);
        if(!book){
            return null;
        }
        book.deleted = true;
        return await book.save();
    }
};