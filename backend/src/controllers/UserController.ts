import {Delete, Get, Query, Route, Tags} from "tsoa";
import {BasicResponse} from "../controllers/types/index";
import {IUserController} from "../controllers/interfaces";
import {LogSuccess} from "../utils/logger";
import { UserRepository } from '../domain/repositories/UserRepository';

@Route("/api/users")
@Tags("UserController")

export class UserController implements IUserController{
    private userRepo: UserRepository;

    constructor() { 
        this.userRepo = new UserRepository();
    }
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
}