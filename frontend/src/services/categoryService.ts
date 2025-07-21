import api from '../utils/axios.config';
import { Category } from "../types/category";

/* a implementar luego cuando se implemente la paginacion
type PaginatedUserResponse = {
  users: User[];
  totalPages: number;
  currentPage: number;
};*/

export const getCategories = async (): Promise<Category[]> => {
  const res = await api.get("/categories");
  return res.data.categories;
};

export const createCategory = async (category: Partial<Category>): Promise<Category> => {
  const res = await api.post("/categories", category);
  return res.data;
};

export const updateCategory = async (id: string, category: Partial<Category>): Promise<Category> => {
  const res = await api.put(`/categories/${id}`, category);
  return res.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  await api.delete(`/categories/${id}`);
};