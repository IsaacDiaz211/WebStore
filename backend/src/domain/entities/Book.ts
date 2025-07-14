import { Schema, model } from 'mongoose';
import { IBook } from '../interfaces/IBook';
// 1. Interfaz TypeScript


// 2. Esquema
const BookSchema = new Schema<IBook>({
  name: { 
    type: String, 
    required: true, 
    trim: true,          // Elimina espacios en blanco
    maxlength: 100       // Validación
  },
  price: { 
    type: Number, 
    required: true,
    min: 100               // Precio no negativo
  },
  description: { 
    type: String, 
    maxlength: 500 
  },
  categories: { 
    type: [{ type: Schema.Types.ObjectId, ref: 'Category'}], 
    required: true,
  },
  stock: { 
    type: Number, 
    required: true,
    default: 0          // Valor por defecto
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

// 3. Exporta el modelo
export const Book = model<IBook>('Book', BookSchema);