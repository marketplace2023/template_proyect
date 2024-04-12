import { Injectable } from '@nestjs/common';
import { CreateProductProductDto } from './dto/create-product_product.dto';
import { UpdateProductProductDto } from './dto/update-product_product.dto';

@Injectable()
export class ProductProductService {
  create(createProductProductDto: CreateProductProductDto) {
    return 'This action adds a new productProduct';
  }

  findAll() {
    return `This action returns all productProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productProduct`;
  }

  update(id: number, updateProductProductDto: UpdateProductProductDto) {
    return `This action updates a #${id} productProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} productProduct`;
  }
}
