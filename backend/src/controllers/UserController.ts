import { Body, Delete, Get, Path, Put, Query, Route, Tags } from "tsoa";
import { Request } from "express";
import { PaginatedUserResponse } from "../controllers/types/index";
import { IUserController } from "../controllers/interfaces";
import { IUser } from "../domain/interfaces/IUser";
import { LogSuccess, LogError, LogInfo } from "../utils/logger";
import { UserRepository } from '../domain/repositories/UserRepository';

@Route("/api/users")
@Tags("UserController")

export class UserController implements IUserController{
    private userRepo: UserRepository;

    constructor() { 
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
        @Query()id?: string
    ): Promise<PaginatedUserResponse | IUser | null> {
        let response: PaginatedUserResponse | IUser | null;
        try {
            if(!id){
                LogSuccess('[/api/users] Get All Users Request');
                response = await this.userRepo.findAll(page, limit);
            } else{
                LogSuccess(`[/api/users] Get User by id: ${id}`);
                response = await this.userRepo.findById(id);
            }  
            return response;
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
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
        let response: PaginatedUserResponse;
        try{
            LogSuccess('[/api/users] Get all active Users Request');
            response = await this.userRepo.findActiveUsers(page, limit);
            return response;
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
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
        let response: PaginatedUserResponse;
        try{
            LogSuccess('[/api/users] Get Deleted Users Request');
            response = await this.userRepo.findDeletedUsers(page, limit);
            return response;
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
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
        let response: PaginatedUserResponse;
        try{
            LogSuccess(`[/api/users] Get Users role: ${role}`);
            response = await this.userRepo.findUsersByRole(role, page, limit);
            return response;
        } catch (error) {
            LogError(`[UserController -> getUsersByRole]: ${JSON.stringify(error)}`);
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
        let response: IUser;
        try{
            if(id){
                response = await this.userRepo.deleteUserById(id);
                LogSuccess(`[/api/users] Deleted User by id: ${id}`);
                return response;
            } else{
                LogInfo(`[/api/users] No id provided`);
                return null;
            }
        } catch (error) {
            LogError(`in ` + JSON.stringify(error));
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
                return null;
            }
            const updated = await this.userRepo.updateUser(update, id);
            LogSuccess(`User updated: ${id}`);
            return updated;
        }catch {
            LogInfo(`[/api/users] Error updating user: ${id}`);
            return null;
        }
    }
}