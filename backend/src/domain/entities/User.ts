import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,          // Elimina espacios en blanco
    maxlength: 30       // Validación
  },
  lastname: {
    type: String,
    required: true,
    trim: true,          // Elimina espacios en blanco
    maxlength: 30       // Validación
  },
  email: {
    type: String,
    required: true,
    trim: true,          // Elimina espacios en blanco
    maxlength: 100       // Validación
  },
  password: {
    type: String,
    required: true,
    trim: true,          // Elimina espacios en blanco
    maxlength: 50       // Validación
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'customer'],
    maxlength: 10       // Validación
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

export const User = model<IUser>('User', UserSchema);