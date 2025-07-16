import { PaginatedUserResponse } from 'controllers/types';
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
   * @returns List<User>
   */
  public async findAll(page: number, max: number) {
    let response: PaginatedUserResponse = {
      users: [],
      totalPages: 1,
      currentPage: page
    };
    await User.find()
      .limit(max)
      .skip((page - 1) * max)
      .exec().then((users: IUser[]) => {
        response.users = users;
      });
    await User.countDocuments().exec().then((count: number) => {
      let totalPages = Math.ceil(count / max);
      let currentPage = page;
      response.totalPages = totalPages;
      response.currentPage = currentPage;
    });
    return response;
  }
  /**
   * Devuelve un Usuario buscando por su email.
   * @param email 
   * @returns User
   */
  async findByEmail(email: string) {
    return await User.findOne({ email }).select('+password'); // Incluye el campo password
  }
  /**
   * Cosa muy extraña para mí que el id tenga que ser string y no int.
   * @param id 
   * @returns User
   */
  async findById(id: string){
    return await User.findById(id);
  }
  /**
   * La palabra reserva 'async' declara que findById es una función asíncrona, lo que permite usar await dentro de ella.
   * User.findById(id) es una función que devuelve una promesa (por ejemplo, usando Mongoose).
   * await pausa la ejecución de esa línea hasta que la promesa se resuelva, ya sea con el documento del usuario (si lo encuentra) o null.
   * Curiosamente, no siempre se necesita. Si simplemente vas a retornar el resultado de User.findById(id) sin hacer nada más con él, se podría
   * omitir el await.
   * Cuándo sí conviene usarlo: Usar await puede tener sentido si:
   * Se necesita manejar errores con try/catch.
   * Se quiere procesar el resultado antes de devolverlo.
   * O si se busca consistencia en el estilo de código, especialmente si otras funciones similares ya usan await. Como es nuestro caso.
   * @returns 
   */
  async findDeletedUsers(page: number, max: number){
    let response: PaginatedUserResponse = {
      users: [],
      totalPages: 1,
      currentPage: page
    };
    await User.find({deleted: true})
     .limit(max)
     .skip((page - 1) * max)
     .exec().then((users: IUser[]) => {
        response.users = users;
      });
    await User.countDocuments().exec().then((count: number) => {
      let totalPages = Math.ceil(count / max);
      let currentPage = page;
      response.totalPages = totalPages;
      response.currentPage = currentPage;
    });
    return response;
  }
  async findActiveUsers(page: number, max: number){
    let response: PaginatedUserResponse = {
      users: [],
      totalPages: 1,
      currentPage: page
    };
    await User.find({deleted: false})
     .limit(max)
     .skip((page - 1) * max)
     .exec().then((users: IUser[]) => {
        response.users = users;
      });
    await User.countDocuments().exec().then((count: number) => {
      let totalPages = Math.ceil(count / max);
      let currentPage = page;
      response.totalPages = totalPages;
      response.currentPage = currentPage;
    });
    return response;
  }
  async findUsersByRole(p_role: string, page: number, max: number){
    let response: PaginatedUserResponse = {
      users: [],
      totalPages: 1,
      currentPage: page
    };
    await User.find({role: p_role})
     .limit(max)
     .skip((page - 1) * max)
     .exec().then((users: IUser[]) => {
        response.users = users;
      });
    await User.countDocuments().exec().then((count: number) => {
      let totalPages = Math.ceil(count / max);
      let currentPage = page;
      response.totalPages = totalPages;
      response.currentPage = currentPage;
    });
    return response;
  }
  async updateUser(userData: Partial<IUser>, id: string){
    //let user = new User(userData);
    return await User.findByIdAndUpdate(id, userData);
  }
  async deleteUserById(id: string){
    let user = await User.findById(id);
    if(!user){
      throw new Error('Usuario no encontrado')
    } else{
      if(!user.deleted){
        user.deleted = true;
      }
    }
    user.save();
    return user;
  }
}