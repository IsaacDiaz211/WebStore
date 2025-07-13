import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

/**
 * 
 * @param { Request } req Original request previuos middleware of verification JWT
 * @param { Response } res Response to verification of JWT 
 * @param { NextFunction } next Next function to be executed 
 * @returns Errors of verification or next execution
 */
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // check header from request
    let token: any = req.headers['authorization'];
    if (!token) {
        res.status(403).send({
            message: 'No token provided. No permission to access.'
        });
        return;
    }
    // check token obtained
    jwt.verify(token, process.env.SECRETKEY  || '', (err: any, decoded: any) =>{
        if (err) {
            res.status(500).send({
                authenticationError: 'JWT verification failed',
                message: 'Unauthorized'
            });
            return;
        }
        //if jwt is ok
       (req as any).user = decoded;
        next();
    });
}