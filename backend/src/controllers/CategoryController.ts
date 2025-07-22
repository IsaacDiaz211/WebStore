import { Body, Controller, Delete, Get, Path, Put, Query, Route, Tags } from "tsoa";
import { Request } from "express";
import { PaginatedCategoriesResponse } from "../controllers/types/index";
import { ICategoryController } from "../controllers/interfaces";
import { ICategory } from "../domain/interfaces/ICategory";
import { LogSuccess, LogError, LogInfo } from "../utils/logger";
import { CategoryRepository } from '../domain/repositories/CategoryRepository';

@Route("/api/categories")
@Tags("CategoryController")

export class CategoryController extends Controller implements ICategoryController {
    private cateRepo: CategoryRepository;

    constructor() { 
        super();
        this.cateRepo = new CategoryRepository();
    }

    public async createCategory(name: string): Promise<ICategory | null> {
        try {
            const newCate = await this.cateRepo.create({name});
            this.setStatus(201);
            return newCate;
        } catch (error) {
            LogError(`in Creating Category: ` + JSON.stringify(error));
            return null;
        }
    }

    public async getCategories(page: number, limit: number, id?: string): Promise<PaginatedCategoriesResponse | ICategory | null> {
        try {
            if (id) {
                LogSuccess(`[/api/categories] Get Category By ID: ${id}`);
                //response = await CategoryRepository.getCategoryById(id);
                return null;
            } else {
                LogSuccess('[/api/categories] Get All Categories Request');
                return await this.cateRepo.findAll(page, limit);
            }
        } catch (error) {
            LogError(`[Controller ERROR]: Getting Categories: ${error}`);
            return null;
        }
    }

    public async updateCategory(id: string, update: Partial<ICategory>): Promise<any> {
        let response: any = '';
        try {
            this.setStatus(200);
            return await this.cateRepo.updateCategory(id, update);
        } catch (error) {
            LogError(`[Controller ERROR]: Updating Category: ${error}`);
            response = {
                status: 400,
                message: 'Error updating category'
            };
        }
        return response;
    }

    public async deleteCategory(id: string): Promise<ICategory | null> {
        try {
            LogInfo('Deleting category');
            this.setStatus(200);
            return await this.cateRepo.deleteCategory(id);
        } catch (error) {
            LogError(`[Controller ERROR]: Deleting Category: ${error}`);
            return null;
        }
    }
}