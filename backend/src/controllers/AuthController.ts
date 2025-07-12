import { Post, Route, Tags} from "tsoa";
import { Request, Response } from 'express';
import { UserRepository } from '../domain/repositories/UserRepository';
import { hashPassword, comparePassword } from '../utils/hash';
import { LogInfo, LogSuccess, LogError } from '../utils/logger';
import jwt from 'jsonwebtoken';

@Route('/api/auth')
@Tags('AuthController')

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
  @Post('/register')
  async register(req: Request, res: Response) {
    LogInfo(`Body recibido: ${req.body}`); // Debug
    try {
      const { name, lastname, email, pass, role } = req.body;
      const userExists = await this.userRepo.findByEmail(email);

      if (userExists) {
        return res.status(400).json({ error: 'El usuario ya existe' });
      } else {
        // Hash de la contraseña
        const password: string = await hashPassword(pass);
        LogInfo(`Password hashed: ${password}`);
        // Crear el nuevo usuario
        const newUser = await this.userRepo.create({ name, lastname, email, password, role });
        res.status(201).json({ id: newUser._id, name, lastname, email, role });
        LogSuccess(`Usuario creado en MongoDB: id: ${newUser._id}`);
      }
    } catch (error) {
      LogError(`Error en register: ${error}`);
      res.status(500).json({ error: 'Error en register' });
    }
  }
  /**
   * 
   * @param { Request } req 
   * @param { Response } res 
   * @returns 
   */
  @Post('/login')
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await this.userRepo.findByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      } else {
        const token = jwt.sign(
          { id: user._id, role: user.role },  // Datos del usuario a incluir en el token (payload)
          process.env.JWT_SECRET || 'secret_fallback', // Clave secreta para firmar el token
          { expiresIn: '1h' } // Tiempo de expiración (1 hora)
        );
        res.json({ token, user: { id: user._id, email: user.email, role: user.role }, message: 'Inicio de sesión exitoso' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al iniciar sesión' });
    }
  }
}