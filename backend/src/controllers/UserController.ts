import {Get, Query, Route, Tags} from "tsoa";
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

    public async getUsers(): Promise<any> {
        LogSuccess('[/api/users] Get All Users Request');
        const response = this.userRepo.findAll();
        return response;
    }
}