import { PaginatedCategoriesResponse } from 'controllers/types';
import { Category } from '../entities/Category';
import { ICategory } from '../interfaces/ICategory';
import { Types } from 'mongoose';
import Partial  from 'mongoose';

export class CategoryRepository {
    public async create(categoryData: Partial<ICategory>): Promise<ICategory> {
        return await Category.create(categoryData);
    }
    public async findAll(page: number, max: number){
        let response: PaginatedCategoriesResponse = {
            categories: [],
            totalPages: 1,
            currentPage: page
        };
        await Category.find()
            .limit(max)
            .skip((page - 1) * max)
            .exec().then((categories: ICategory[]) => {
                response.categories = categories;
            });
        await Category.countDocuments().exec().then((count: number) => {
            let totalPages = Math.ceil(count / max);
            let currentPage = page;
            response.totalPages = totalPages;
            response.currentPage = currentPage;
        });
        return response;
    }
    public async updateCategory(id: string, categoryData: Partial<ICategory>){
        return await Category.findByIdAndUpdate(id, categoryData);
    }
    public async deleteCategory(id: string){
        let category = await Category.findById(id);
        if(!category){
            return null;
        }
        category.deleted = true;
        return await category.save(); 
    }
}