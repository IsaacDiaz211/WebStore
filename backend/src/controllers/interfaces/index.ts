//import {BasicResponse} from
import {BasicResponse} from "controllers/types"

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}