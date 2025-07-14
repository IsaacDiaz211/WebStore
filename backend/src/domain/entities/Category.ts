import { Schema, model } from 'mongoose';
import { ICategory } from '../interfaces/ICategory';

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    trim: true,          // Elimina espacios en blanco
    maxlength: 100       // Validación
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export const Category = model<ICategory>('Category', CategorySchema);