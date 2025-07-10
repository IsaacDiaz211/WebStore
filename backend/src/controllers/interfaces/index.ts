//import {BasicResponse} from
import {BasicResponse} from "controllers/types"

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    getUsers(id?: string): Promise<any>;
    deleteUser(id?: string): Promise<any>;
}