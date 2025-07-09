import mongoose from 'mongoose';
import 'dotenv/config'; // Carga las variables de entorno
import * as process from 'node:process'

const uri = process.env.MONGODB_URI;
if (!uri){
  throw new Error('Variable no definida');
}

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  }
};