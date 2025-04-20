import { User } from '../entities/User';
import { IUser } from '../interfaces/IUser';

export class UserRepository {
    async create(userData: IUser) {
      const user = new User(userData);
      return await user.save();
    }


  public async findAll() {
    return await User.find().exec();
  }
}