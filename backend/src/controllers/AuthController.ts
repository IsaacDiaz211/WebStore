import { Request, Response } from 'express';
import { UserRepository } from '../domain/repositories/UserRepository';

export class AuthController {
  private userRepo: UserRepository;

  constructor() { 
    this.userRepo = new UserRepository();
  }

  async register(req: Request, res: Response) {
    const { name, lastname, email, password, role } = req.body;
    const userExists = await this.userRepo.findByEmail(email);

    if (userExists) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    } else {
      const newUser = await this.userRepo.create({ name, lastname, email, password, role });
      res.status(201).json({ id: newUser._id, name, lastname, email, role });
    }
  }

  async login(req: Request, res: Response) {
    // Lógica para comparar contraseñas y generar JWT...
    const { email, password } = req.body;

    try {
      const user = await this.userRepo.findByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }

      const isMatch = (password === user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al iniciar sesión' });
    }
  }
}
/* Registro
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
};*/