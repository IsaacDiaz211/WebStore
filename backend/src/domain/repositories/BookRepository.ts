import { BookResponse } from 'controllers/types';
import { Book } from '../entities/Book';
import { IBook } from '../interfaces/IBook';
import  Partial  from 'mongoose';

export class BookRepository {
    async create(bookData: Partial<IBook>) {
        console.log(`[BookRepository]: Creating book`);
        const book = new Book(bookData);
        return await book.save();
    }

    public async findAll(page: number, max: number) {
        let response: BookResponse = {
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
};