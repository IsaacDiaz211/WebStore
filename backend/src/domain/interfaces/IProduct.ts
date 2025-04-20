import { Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    price: number;
    description?: string;  // Opcional
    category: string;
    stock: number;
    createdAt: Date;      // Auto-generado
    deleted: boolean;
  };