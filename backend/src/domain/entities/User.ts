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
    unique: true,
    trim: true,          // Elimina espacios en blanco
    maxlength: 100       // Validación
  },
  password: {
    type: String,
    required: true,
    select: false,       // No se muestra en las consultas
    trim: true,          // Elimina espacios en blanco
    maxlength: 80       // Validación
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
}, {timestamps: true});

/**
 * Este modelo va a estar asignado a una colección en la base de datos y va a seguir este esquema 'UserSchema', de
 * manera que se crea un modelo a través de typescript. Así que a partir de ahora si nosotros creamos 
 * elementos en la base de datos van a seguir esta estructura.
 */
export const User = model<IUser>('User', UserSchema);