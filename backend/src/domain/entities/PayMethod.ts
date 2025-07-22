import { Schema, model } from 'mongoose';
import { IPayMethod } from '../interfaces/IPayMethod';

// 1. Interfaz TypeScript


// 2. Esquema
const PayMethodSchema = new Schema<IPayMethod>({
  name: { 
    type: String, 
    required: true, 
    trim: true,
    maxlength: 100
  },
  charge: { 
    type: Number, 
    required: true,
    max: 10,
    min: 0
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

// 3. Exporta el modelo
export const PayMethod = model<IPayMethod>('PayMethod', PayMethodSchema);