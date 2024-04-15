import { Injectable } from '@nestjs/common';
import { CreateProductPricelistItemDto } from './dto/create-product_pricelist_item.dto';
import { UpdateProductPricelistItemDto } from './dto/update-product_pricelist_item.dto';

@Injectable()
export class ProductPricelistItemService {
  create(createProductPricelistItemDto: CreateProductPricelistItemDto) {
    return 'This action adds a new productPricelistItem';
  }

  findAll() {
    return `This action returns all productPricelistItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productPricelistItem`;
  }

  update(id: number, updateProductPricelistItemDto: UpdateProductPricelistItemDto) {
    return `This action updates a #${id} productPricelistItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPricelistItem`;
  }
}
