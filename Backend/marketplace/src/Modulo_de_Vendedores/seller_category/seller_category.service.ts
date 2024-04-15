import { Injectable } from '@nestjs/common';
import { CreateSellerCategoryDto } from './dto/create-seller_category.dto';
import { UpdateSellerCategoryDto } from './dto/update-seller_category.dto';

@Injectable()
export class SellerCategoryService {
  create(createSellerCategoryDto: CreateSellerCategoryDto) {
    return 'This action adds a new sellerCategory';
  }

  findAll() {
    return `This action returns all sellerCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerCategory`;
  }

  update(id: number, updateSellerCategoryDto: UpdateSellerCategoryDto) {
    return `This action updates a #${id} sellerCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerCategory`;
  }
}
