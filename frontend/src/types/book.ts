import { Category } from "./category";

export type Book = {
  id: string;
  title: string;
  price: number;
  description?: string;
  author: string;
  editorial: string;
  language: string;
  stock: number;
  categories: Category[];
  imageCover: string,
  imageBack?: string,
  isActive: boolean;
};

export type PaginatedBooksResponse = {
  books: Book[];
  totalPages: number;
  currentPage: number;
};