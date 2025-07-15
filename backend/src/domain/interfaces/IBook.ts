import { Document, ObjectId } from 'mongoose';

export interface IBook extends Document {
    title: string;
    price: number;
    description?: string;
    author: string;
    editorial: string;
    language: string;
    stock: number;
    categories: ObjectId[];
    imageCover: string,
    imageBack: string,
    createdAt: Date;      // Auto-generado
    deleted: boolean;
  };