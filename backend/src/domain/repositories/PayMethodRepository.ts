import { PaginatedPayMethodsResponse } from 'controllers/types';
import { PayMethod } from '../entities/PayMethod';
import { IPayMethod } from '../interfaces/IPayMethod';
import { Types } from 'mongoose';
import Partial  from 'mongoose';

export class PayMethodRepository {
    public async create(payMethodData: Partial<IPayMethod>): Promise<IPayMethod> {
        return await PayMethod.create(payMethodData);
    }
    public async findAll(page: number, max: number){
        let response: PaginatedPayMethodsResponse = {
            payMethods: [],
            totalPages: 1,
            currentPage: page
        };
        await PayMethod.find()
            .limit(max)
            .skip((page - 1) * max)
            .exec().then((payMethods: IPayMethod[]) => {
                response.payMethods = payMethods;
            });
        await PayMethod.countDocuments().exec().then((count: number) => {
            let totalPages = Math.ceil(count / max);
            let currentPage = page;
            response.totalPages = totalPages;
            response.currentPage = currentPage;
        });
        return response;
    }
    public async updatePayMethod(id: string, payMethodData: Partial<IPayMethod>){
        return await PayMethod.findByIdAndUpdate(id, payMethodData);
    }
    public async deletePayMethod(id: string){   
        let payMethod = await PayMethod.findById(id);
        if(!payMethod){
            return null;
        }
        payMethod.deleted = true;
        return await payMethod.save(); 
    }
}
