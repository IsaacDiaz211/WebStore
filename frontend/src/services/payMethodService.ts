import api from '../utils/axios.config';
import { PayMethod, PaginatedPayMethodsResponse } from "../types/PayMethod";

/* a implementar luego cuando se implemente la paginacion
type PaginatedUserResponse = {
  users: User[];
  totalPages: number;
  currentPage: number;
};*/

export const getPayMethods = async (): Promise<PaginatedPayMethodsResponse> => {
  const res = await api.get("/paymethods");
  return res.data.payMethods;
};

export const createPayMethod = async (payMethod: Partial<PayMethod>): Promise<PayMethod> => {
  const res = await api.post("/paymethods", payMethod);
  return res.data;
};

export const updatePayMethod = async (id: string, payMethod: Partial<PayMethod>): Promise<PayMethod> => {
  const res = await api.put(`/paymethods/${id}`, payMethod);
  return res.data;
};

export const deletePayMethod = async (id: string): Promise<void> => {
  await api.delete(`/paymethods/${id}`);
};