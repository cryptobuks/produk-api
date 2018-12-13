import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDto } from './product.dto';
import { Product } from './product.interface';
 
@Injectable()
export class ProductsService {
 
    constructor(@InjectModel('Product') private productModel: Model<Product>){
 
    }
 
    async createProduct(productDto: ProductDto): Promise<Product>{
        const product = new this.productModel(productDto);
        return await product.save();
    }
 
    async getProducts(): Promise<Product[]>{
        return await this.productModel.find().exec();
    }
 
    async getProduct(id): Promise<Product>{
        return await this.productModel.findOne({_id: id});
    }
 
}