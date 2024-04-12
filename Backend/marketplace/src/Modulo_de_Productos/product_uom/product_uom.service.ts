import { Injectable } from '@nestjs/common';
import { CreateProductUomDto } from './dto/create-product_uom.dto';
import { UpdateProductUomDto } from './dto/update-product_uom.dto';

@Injectable()
export class ProductUomService {
  create(createProductUomDto: CreateProductUomDto) {
    return 'This action adds a new productUom';
  }

  findAll() {
    return `This action returns all productUom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productUom`;
  }

  update(id: number, updateProductUomDto: UpdateProductUomDto) {
    return `This action updates a #${id} productUom`;
  }

  remove(id: number) {
    return `This action removes a #${id} productUom`;
  }
}
