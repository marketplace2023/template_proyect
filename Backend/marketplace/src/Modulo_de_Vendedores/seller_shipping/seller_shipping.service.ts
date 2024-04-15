import { Injectable } from '@nestjs/common';
import { CreateSellerShippingDto } from './dto/create-seller_shipping.dto';
import { UpdateSellerShippingDto } from './dto/update-seller_shipping.dto';

@Injectable()
export class SellerShippingService {
  create(createSellerShippingDto: CreateSellerShippingDto) {
    return 'This action adds a new sellerShipping';
  }

  findAll() {
    return `This action returns all sellerShipping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerShipping`;
  }

  update(id: number, updateSellerShippingDto: UpdateSellerShippingDto) {
    return `This action updates a #${id} sellerShipping`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerShipping`;
  }
}
