import { Schema, model } from 'mongoose';
import { IProduct } from '../interfaces/IProduct';
// 1. Interfaz TypeScript


// 2. Esquema
const ProductSchema = new Schema<IProduct>({
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
  category: { 
    type: String, 
    required: true,
    enum: ['guitarras', 'baterías', 'teclados']  // Valores permitidos
  },
  stock: { 
    type: Number, 
    required: true,
    default: 0          // Valor por defecto
  },
  createdAt: { 
    type: Date, 
    default: Date.now    // Fecha automática
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

// 3. Exporta el modelo
export const Product = model<IProduct>('Product', ProductSchema);