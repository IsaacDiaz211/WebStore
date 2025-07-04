import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import bcrypt  from 'bcrypt';

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
/*
// Middleware para hashear antes de guardar
UserSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = async function(
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};*/

