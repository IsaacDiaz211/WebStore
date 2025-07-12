import {Delete, Get, Post, Query, Route, Tags} from "tsoa";
import {BasicResponse} from "../controllers/types/index";
import {IUserController} from "../controllers/interfaces";
import {LogSuccess} from "../utils/logger";
import { UserRepository } from '../domain/repositories/UserRepository';
import { Request, Response } from "express";

@Route("/api/users")
@Tags("UserController")

export class UserController implements IUserController{
    private userRepo: UserRepository;

    constructor() { 
        this.userRepo = new UserRepository();
    }

    /**
     * 
     * @param {string} id 
     * @returns 
     */
    @Get("/")
    public async getUsers(@Query()id?: string): Promise<any> {
        let response: any = '';
        if(!id){
            LogSuccess('[/api/users] Get All Users Request');
            response = this.userRepo.findAll();
        } else{
            LogSuccess(`[/api/users] Get User by id: ${id}`);
            response = this.userRepo.findById(id);
        }  
        return response;
    }

    /**
     * 
     * @param {string} id 
     * @returns 
     */
    @Delete("/")
    public async deleteUser(@Query()id?: string): Promise<any> {
        let response: any = '';
        if(id){
            LogSuccess(`[/api/users] Deleted User by id: ${id}`);
            response = this.userRepo.deleteUserById(id);
        } else{
            LogSuccess(`[/api/users] No id provided`);
            response = { message: 'Please, provide an id'};
        } 
        return response;
    }
    /**
     * 
     * @param req 
     * @returns 
     */
    @Post("/")
    public async createUser(req: Request): Promise<any> {
        let response: any = '';
        console.log('Body recibido:', req.body);
        try {
            const { name, lastname, email, password, role } = req.body;
            const userExists = await this.userRepo.findByEmail(email);

            if (userExists) {
                response = { message: 'El usuario ya existe' };
            } else {
                console.log('Se ingresó al else');
                const newUser = await this.userRepo.create({ name, lastname, email, password, role });
                response = { id: newUser._id, name, lastname, email, role };
                LogSuccess('Usuario creado en MongoDB:');
            }
            return response;
        } catch (error) {
            console.error('Error en register:', error);
            response = ({ message: 'Error in register' });
            return response;
        }
    }
    /**
     * 
     * @param id 
     * @param req 
     * @returns 
     */
    
    public async updateUser(id: string, req: Request): Promise<any> {
        let response: any = '';
        console.log('Body recibido:', req.body);
        try{
            
            const { name, lastname, email, password, role } = req.body;
            let userExists = await this.userRepo.findByEmail(email);

            if (userExists) {
                LogSuccess(`[/api/users] Update User by id: ${id}`);
                userExists = await this.userRepo.updateUser({ name, lastname, email, password, role }, id);
                response = { id, name, lastname, email, role };
            } else {
                LogSuccess('The user dosnt exist');
                response = ({ message: 'Error in update' });
            }
            return response;
        }catch {
            response = (`[/api/users] Error updating user: ${id}`);
            return response;
        }
    }
}