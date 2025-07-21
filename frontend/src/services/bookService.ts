import api from '../utils/axios.config';
import { Book } from "../types/book";

/* a implementar luego cuando se implemente la paginacion
type PaginatedUserResponse = {
  users: User[];
  totalPages: number;
  currentPage: number;
};*/

export const getBooks = async (): Promise<Book[]> => {
  const res = await api.get("/books");
  //Hacemos esto porque las categorias están dentro de cada libro por ids.
  return res.data.map((book: any) => ({
    ...book,
    categories: book.categories.map((cat: any) => ({
      id: cat._id,
      name: cat.name
    }))
  }));
};

export const createBook = async (book: Partial<Book>): Promise<Book> => {
  const res = await api.post("/books", book);
  return res.data;
};

export const updateBook = async (id: string, book: Partial<Book>): Promise<Book> => {
  const res = await api.put(`/books/${id}`, book);
  return res.data;
};

export const deleteBook = async (id: string): Promise<void> => {
  await api.delete(`/books/${id}`);
};