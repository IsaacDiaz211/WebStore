// backend/src/domain/repositories/ProductRepository.ts
import { Book } from '../entities/Book';
import { IBook } from '../interfaces/IBook';

export class ProductRepository {
    
  async create(bookData: IBook) {
    const book = new Book(bookData);
    return await book.save();
  }

  async findAll() {
    return await Book.find().exec();
  }
}