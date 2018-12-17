import { ApiModelProperty, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Param, Put, Delete, Header } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductsService } from './products.service';
 
@Controller('api/products') // declared a prefix for every route
export class ProductsController {
 
    constructor(private productService: ProductsService){
 
    }
 
    @Post()
    @ApiCreatedResponse({ description: 'The product has been successfully created.'})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async createProduct(@Body() product: ProductDto){
        return await this.productService.createProduct(product);
    }
 
    @Get()
    async getProducts(){
        return await this.productService.getProducts();
    }
 
    @Get(':id')
    async getProduct(@Param('id') id: String){
        return await this.productService.getProduct(id);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: String, @Body() product: ProductDto){
        return await this.productService.updateProduct(id, product);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: String){
        return await this.productService.deleteProduct(id);
    }
 
}