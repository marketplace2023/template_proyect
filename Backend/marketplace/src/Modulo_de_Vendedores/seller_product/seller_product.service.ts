import { Injectable } from '@nestjs/common';
import { CreateSellerProductDto } from './dto/create-seller_product.dto';
import { UpdateSellerProductDto } from './dto/update-seller_product.dto';

@Injectable()
export class SellerProductService {
  create(createSellerProductDto: CreateSellerProductDto) {
    return 'This action adds a new sellerProduct';
  }

  findAll() {
    return `This action returns all sellerProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerProduct`;
  }

  update(id: number, updateSellerProductDto: UpdateSellerProductDto) {
    return `This action updates a #${id} sellerProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerProduct`;
  }
}
