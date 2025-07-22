import { Body, Controller, Delete, Get, Path, Put, Query, Route, Tags } from "tsoa";
import { Request } from "express";
import { PaginatedPayMethodsResponse } from "../controllers/types/index";
import { IPayMethodController } from "../controllers/interfaces";
import { IPayMethod } from "../domain/interfaces/IPayMethod";
import { LogSuccess, LogError, LogInfo } from "../utils/logger";
import { PayMethodRepository } from '../domain/repositories/PayMethodRepository';

@Route("/api/paymethods")
@Tags("PayMethodController")

export class PayMethodController extends Controller implements IPayMethodController {
    private payRepo: PayMethodRepository;

    constructor() { 
        super();
        this.payRepo = new PayMethodRepository();
    }

    public async createPayMethod(req: Request): Promise<IPayMethod | null> {
        try {
            const { name, charge } = req.body;
            const newPay = await this.payRepo.create({name,charge});
            this.setStatus(201);
            return newPay;
        } catch (error) {
            LogError(`in Creating PayMethod: ` + JSON.stringify(error));
            return null;
        }
    }

    public async getPayMethods(page: number, limit: number, id?: string): Promise<PaginatedPayMethodsResponse | IPayMethod | null> {
        try {
            if (id) {
                LogSuccess(`[/api/paymethods] Get PayMethod By ID: ${id}`);
                //response = await CategoryRepository.getCategoryById(id);
                return null;
            } else {
                LogSuccess('[/api/paymethods] Get All PayMethods Request');
                return await this.payRepo.findAll(page, limit);
            }
        } catch (error) {
            LogError(`[Controller ERROR]: Getting PayMethods: ${error}`);
            return null;
        }
    }

    public async updatePayMethod(id: string, update: Partial<IPayMethod>): Promise<IPayMethod | null> {
        try {
            this.setStatus(200);
            return await this.payRepo.updatePayMethod(id, update);
        } catch (error) {
            LogError(`[Controller ERROR]: Updating PayMethod: ${error}`);
            return null;
        }
    }

    public async deletePayMethod(id: string): Promise<IPayMethod | null> {
        try {
            LogInfo('Deleting PayMethod');
            this.setStatus(200);
            return await this.payRepo.deletePayMethod(id);
        } catch (error) {
            LogError(`[Controller ERROR]: Deleting PayMethod: ${error}`);
            return null;
        }
    }
}