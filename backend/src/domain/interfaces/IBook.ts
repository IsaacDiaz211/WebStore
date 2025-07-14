import { Document, ObjectId } from 'mongoose';

export interface IBook extends Document {
    name: string;
    price: number;
    description?: string;
    author: string;
    editorial: string;
    language: string;
    stock: number;
    categories: ObjectId[];
    createdAt: Date;      // Auto-generado
    deleted: boolean;
  };