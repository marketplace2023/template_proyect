import { Injectable } from '@nestjs/common';
import { CreateProductBrandDto } from './dto/create-product_brand.dto';
import { UpdateProductBrandDto } from './dto/update-product_brand.dto';

@Injectable()
export class ProductBrandService {
  create(createProductBrandDto: CreateProductBrandDto) {
    return 'This action adds a new productBrand';
  }

  findAll() {
    return `This action returns all productBrand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productBrand`;
  }

  update(id: number, updateProductBrandDto: UpdateProductBrandDto) {
    return `This action updates a #${id} productBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} productBrand`;
  }
}
