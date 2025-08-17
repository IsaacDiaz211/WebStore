import api from '../utils/axios.config';
import { Book, PaginatedBooksResponse } from "../types/book";

// se usa  FETCH cuando el método hace peticiones HTTP
export const fetchBooks = async (): Promise<PaginatedBooksResponse> => {
  const res = await api.get("/books", {
    //params: { page, limit },page = 1, limit = 6
    headers: { Authorization: `${localStorage.getItem("token")}` },
    // Seguramente de error con el Bearer
  });
  return res.data;
  
  /**
   * Una opción a considerar
   * const res = await api.get("/books");
  //Hacemos esto porque las categorias están dentro de cada libro por ids.
  return res.data.map((book: any) => ({
    ...book,
    categories: book.categories.map((cat: any) => ({
      id: cat._id,
      name: cat.name
    }))
  }));
   */
};

export const fetchActiveBooks = async (page = 1, limit = 6): Promise<PaginatedBooksResponse> => {
  const res = await api.get("/books/active", {
    params: { page, limit },
  });
  return res.data;
};

export const createBook = async (formData: FormData) => {
  const res = await api.post("/books", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`, /**se elimino el Bearer */
    },
  });
  return res.data;
};

export const updateBook = async (id: string, formData: FormData) => {
  const res = await api.put("/books", formData, {
    params: { id },
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};

export const deleteBook = async (id: string) => {
  const res = await api.delete("/books", {
    params: { id },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data;
};