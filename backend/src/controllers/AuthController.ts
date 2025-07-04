import { Request, Response } from 'express';
import { UserRepository } from '../domain/repositories/UserRepository';

const userRepo = new UserRepository();

// Registro
export const register = async (req: Request, res: Response) => {
  try {
    const { name, lastname, email, password, role } = req.body;
    const userExists = await userRepo.findByEmail(email);

    if (userExists) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    const newUser = await userRepo.create({ name, lastname, email, password, role });
    res.status(201).json({ id: newUser._id, name, lastname, email, role });

  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

// Login (lo implementarás después)
export const login = async (req: Request, res: Response) => {
  // Lógica para comparar contraseñas y generar JWT...
};