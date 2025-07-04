import { User } from '../entities/User';
import { IUser } from '../interfaces/IUser';
import  Partial  from 'mongoose'

export class UserRepository { 
  async create(userData: Partial<IUser>) {
    const user = new User(userData);
    return await user.save();
  }


  public async findAll() {
    return await User.find().exec();
  }

  async findByEmail(email: string) {
    return User.findOne({ email }).select('+password'); // Incluye el campo password
  }
}