import api from '../utils/axios.config';
import { User } from "../types/user";

/* a implementar luego cuando se implemente la paginacion
type PaginatedUserResponse = {
  users: User[];
  totalPages: number;
  currentPage: number;
};*/

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get("/users");
  return res.data.users;
};

export const createUser = async (user: Partial<User>): Promise<User> => {
  const res = await api.post("/users", user);
  return res.data;
};

export const updateUser = async (id: string, user: Partial<User>): Promise<User> => {
  const res = await api.put(`/users/${id}`, user);
  return res.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/users/${id}`);
};