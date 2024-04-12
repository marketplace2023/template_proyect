import { Injectable } from '@nestjs/common';
import { CreateProductPricelistDto } from './dto/create-product_pricelist.dto';
import { UpdateProductPricelistDto } from './dto/update-product_pricelist.dto';

@Injectable()
export class ProductPricelistService {
  create(createProductPricelistDto: CreateProductPricelistDto) {
    return 'This action adds a new productPricelist';
  }

  findAll() {
    return `This action returns all productPricelist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productPricelist`;
  }

  update(id: number, updateProductPricelistDto: UpdateProductPricelistDto) {
    return `This action updates a #${id} productPricelist`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPricelist`;
  }
}
