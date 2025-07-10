import { User } from '../entities/User';
import { IUser } from '../interfaces/IUser';
import  Partial  from 'mongoose'

export class UserRepository {
  /**
   * 
   * @param userData 
   * @returns 
   */
  async create(userData: Partial<IUser>) {
    const user = new User(userData);
    return await user.save();
  }
  /**
   * Devuelve una lista con todos los usuarios.
   * @returns 
   */
  public async findAll() {
    return await User.find().exec();
  }
  /**
   * Devuelve un Usuario buscando por su email.
   * @param email 
   * @returns User
   */
  async findByEmail(email: string) {
    return User.findOne({ email }).select('+password'); // Incluye el campo password
  }
  //TODO
  /**
   * get user by id
   * get deleted users
   * get active users
   * update user
   */
}