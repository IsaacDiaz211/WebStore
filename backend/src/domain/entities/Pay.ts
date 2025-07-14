import { Schema, model } from 'mongoose';
import { IPay } from '../interfaces/IPay';
// 1. Interfaz TypeScript


// 2. Esquema
const PaySchema = new Schema<IPay>({
  name: { 
    type: String, 
    required: true, 
    trim: true,          // Elimina espacios en blanco
    maxlength: 100       // Validación
  },
  charge: { 
    type: Number, 
    required: true,
    max: 10,
    min: 0           // Precio no negativo
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

// 3. Exporta el modelo
export const Pay = model<IPay>('Pay', PaySchema);