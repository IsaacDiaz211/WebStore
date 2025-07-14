import { Schema, model } from'mongoose';
import { ISale } from '../interfaces/ISale';

const SaleSchema = new Schema<ISale>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    trim: true,          // Elimina espacios en blanco
    maxlength: 100       // Validación
  },
  date: {
    type: Date,
    required: true,
  },
  payId:{
    type: Schema.Types.ObjectId,
    ref: 'Pay',
    required: true,
    trim: true,
    maxlength: 100
  },
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  detail_books: {
    type: [{
        bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 }
        }],
    required: true,
    min: 1
  },
}, {timestamps: true});

export const Sale = model<ISale>('Sale', SaleSchema);