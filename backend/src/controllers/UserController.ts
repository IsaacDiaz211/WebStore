import { Body, Controller, Delete, Get, Path, Put, Query, Route, Tags } from "tsoa";
import { PaginatedUserResponse } from "../controllers/types/index";
import { IUserController } from "../controllers/interfaces";
import { IUser } from "../domain/interfaces/IUser";
import { LogSuccess, LogError, LogInfo } from "../utils/logger";
import { UserRepository } from '../domain/repositories/UserRepository';

@Route("/api/users")
@Tags("UserController")

export class UserController extends Controller implements IUserController{
    private userRepo: UserRepository;

    constructor() { 
        super();
        this.userRepo = new UserRepository();
    }

    /**
     * Obtener todos los usuarios paginados o un usuario por ID
     * @param { number } page
     * @param { number } limit
     * @param { string } id 
     * @returns 
     */
    @Get("/")
    public async getUsers(
        @Query()page: number, 
        @Query()limit: number, 
        @Path()id?: string
    ): Promise<PaginatedUserResponse | IUser | null> {
        try {
            if(!id){
                LogSuccess('[/api/users] Get All Users Request');
                this.setStatus(200);
                return await this.userRepo.findAll(page, limit);
            } else{
                LogSuccess(`[/api/users] Get User by id: ${id}`);
                this.setStatus(200);
                return await this.userRepo.findById(id);
            }
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }

    /**
     * Obtener usuarios activos paginados
     * @param { number } page
     * @param { number } limit
     * @returns Active users
     */
    @Get("/active")
    public async getActiveUsers(
        @Query()page: number,
        @Query()limit: number
    ): Promise<PaginatedUserResponse | null> {
        try{
            LogSuccess('[/api/users] Get all active Users Request');
            this.setStatus(200);
            return await this.userRepo.findActiveUsers(page, limit);
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }

    /**
     * Obtener usuarios inactivos paginados
     * @param { number } page
     * @param { number } limit
     * @returns Deleted users
     */
    @Get("/deleted")
    public async getDeletedUsers(
        @Query()page: number,
        @Query()limit: number
    ): Promise<PaginatedUserResponse | null> {
        try{
            LogSuccess('[/api/users] Get Deleted Users Request');
            this.setStatus(200);
            return await this.userRepo.findDeletedUsers(page, limit);
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }

    /**
     * Obtener usuarios por rol paginados
     * @param { number } page
     * @param { number } limit
     * @param { string } role
     */
    @Get("/role")
    public async getUsersByRol(
        @Query()page: number,
        @Query()limit: number,
        @Query()role: string
    ): Promise<PaginatedUserResponse | null> {
        try{
            LogSuccess(`[/api/users] Get Users role: ${role}`);
            this.setStatus(200);
            return await this.userRepo.findUsersByRole(role, page, limit);
        } catch (error) {
            LogError(`[UserController -> getUsersByRole]: ${JSON.stringify(error)}`);
            this.setStatus(400);
            return null;
        }
    }

    /**
     * Eliminar un usuario por ID, baja lógica.
     * @param { string } id 
     * @returns 
     */
    @Delete("/{id}")
    public async deleteUser(
        @Path() id: string
    ): Promise<IUser | null> {
        try{
            if(id){ 
                LogSuccess(`[/api/users] Deleted User by id: ${id}`);
                this.setStatus(200);
                return await this.userRepo.deleteUserById(id);
            } else{
                LogInfo(`[/api/users] No id provided`);
                this.setStatus(400);
                return null;
            }
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
            this.setStatus(400);
            return null;
        }
    }

    /**
     * Actualizar usuario por ID
     * @param { string } id 
     * @param { Request } req 
     * @returns 
     */
    @Put("/{id}")
    public async updateUser(
        @Path() id: string,
        @Body() update: Partial<IUser>,
    ): Promise<IUser | null> {
        try{
            LogInfo(`[UserController -> updateUser] Updating user: ${id}`);
            const userExist = await this.userRepo.findByEmail(update.email ?? "");

            if (!userExist) {
                LogInfo("The user dosnt exist.");
                this.setStatus(400);
                return null;
            }
            const updated = await this.userRepo.updateUser(update, id);
            LogSuccess(`User updated: ${id}`);
            this.setStatus(200);
            return updated;
        }catch {
            LogInfo(`[/api/users] Error updating user: ${id}`);
            this.setStatus(400);
            return null;
        }
    }
}