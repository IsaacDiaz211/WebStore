import { Request, Response } from 'express';
import { UserRepository } from '../domain/repositories/UserRepository';
import jwt from 'jsonwebtoken';

export class AuthController {
  private userRepo: UserRepository;

  constructor() { 
    this.userRepo = new UserRepository();
  }
  /**
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  async register(req: Request, res: Response) {
    console.log('Body recibido:', req.body); // Debug
    try {
      const { name, lastname, email, password, role } = req.body;
      const userExists = await this.userRepo.findByEmail(email);

      if (userExists) {
        return res.status(400).json({ error: 'El usuario ya existe' });
      } else {
        const newUser = await this.userRepo.create({ name, lastname, email, password, role });
        res.status(201).json({ id: newUser._id, name, lastname, email, role });
        console.log('Usuario creado en MongoDB:', newUser); // ← Verifica esto
      }
    } catch (error) {
      console.error('Error en register:', error);
      res.status(500).json({ error: 'Error en register' });
    }
    
  }
  /**
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  async login(req: Request, res: Response) {
    // Lógica para comparar contraseñas y generar JWT...
    const { email, password } = req.body;

    try {
      const user = await this.userRepo.findByEmail(email);
      if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }

      const isMatch = (password === user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      } else {
        const token = jwt.sign(
          { id: user._id, role: user.role },  // Datos del usuario a incluir en el token (payload)
          process.env.JWT_SECRET || 'secret_fallback', // Clave secreta para firmar el token
          { expiresIn: '1h' } // Tiempo de expiración (1 hora)
        );
        res.json({ token, user: { id: user._id, email: user.email, role: user.role }, message: 'Inicio de sesión exitoso' });
        //res.status(200).json({ message: 'Inicio de sesión exitoso' });
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