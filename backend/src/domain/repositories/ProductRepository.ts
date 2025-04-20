// backend/src/domain/repositories/ProductRepository.ts
import { Product } from '../entities/Product';
import { IProduct } from '../interfaces/IProduct';

export class ProductRepository {
    
  async create(productData: IProduct) {
    const product = new Product(productData);
    return await product.save();
  }

  async findAll() {
    return await Product.find().exec();
  }
}