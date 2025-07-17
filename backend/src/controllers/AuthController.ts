import { Body, Controller, Post, Query, Route, Tags } from "tsoa";
import { Request } from 'express';
import { IAuthController } from "../controllers/interfaces";
import { UserRepository } from '../domain/repositories/UserRepository';
import { hashPassword, comparePassword } from '../utils/hash';
import { LogInfo, LogSuccess, LogError } from '../utils/logger';
import jwt from 'jsonwebtoken';
import { LoginResponse, RegisterResponse, RegisterInput, LoginInput } from "./types";

@Route('/api/auth')
@Tags('AuthController')

export class AuthController extends Controller implements IAuthController{
  private userRepo: UserRepository;

  constructor() { 
    super();
    this.userRepo = new UserRepository();
  }

  /**
   * 
   * @param { RegisterInput } body 
   * @returns 
   */
  @Post('/register')
  async register(@Body() body: RegisterInput): Promise<RegisterResponse> {
    LogInfo(`Body recibido: ${body}`); // Debug
    try {
      const userExists = await this.userRepo.findByEmail(body.email);

      if (userExists) {
        LogError(`The user already exists`);
        this.setStatus(400);
        return {
          message: 'The user already exists',
          user: null
        }
      } else {
        // Hash de la contraseña
        body.password = await hashPassword(body.password);
        LogInfo(`Password hashed: ${body.password}`);
        // Crear el nuevo usuario
        const { name, lastname, email, password, role } = body;
        const newUser = await this.userRepo.create({ name, lastname, email, password, role});
        LogSuccess(`User created in MongoDB: id: ${newUser._id}`);
        this.setStatus(201);
        return {
          message: 'User created',
          user: newUser
        }
      }
    } catch (error) {
      LogError(`Error in register: ` + JSON.stringify(error));
      this.setStatus(500);
      return {
        message: 'Error in register',
        user: null
      }
    }
  }
  /**
   * 
   * @param { LoginInput } body
   * @returns 
   */
  @Post('/login')
  async login(@Body() body: LoginInput): Promise<LoginResponse> {
    //const { email, password } = req.body;
    try {
      const user = await this.userRepo.findByEmail(body.email);
      if (!user){
        this.setStatus(400);
        return {
          message: 'Invalid credentials',
          token: null
        }
      }
      const isMatch = await comparePassword(body.password, user.password);
      if (!isMatch) {
        this.setStatus(400);
        return {
          message: 'Invalid credentials',
          token: null
        }
      } else {
        const tokenLogin = jwt.sign(
          { id: user._id, role: user.role },  // Datos del usuario a incluir en el token (payload)
          process.env.SECRETKEY || 'secret_fallback', // Clave secreta para firmar el token
          { expiresIn: '1h' } // Tiempo de expiración (1 hora)
        );
        LogSuccess(`Login successful: ${user.email}`);
        this.setStatus(200);
        return {
          message: 'Succes login',
          token: tokenLogin
        };
      }
    } catch (error) {
      LogError(`Error in login: ` + JSON.stringify(error));
      this.setStatus(500);
      return {
        message: 'Error in login',
        token: null
      }
    }
  }
}