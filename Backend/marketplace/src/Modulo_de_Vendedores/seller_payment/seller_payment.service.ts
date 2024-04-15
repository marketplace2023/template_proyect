import { Injectable } from '@nestjs/common';
import { CreateSellerPaymentDto } from './dto/create-seller_payment.dto';
import { UpdateSellerPaymentDto } from './dto/update-seller_payment.dto';

@Injectable()
export class SellerPaymentService {
  create(createSellerPaymentDto: CreateSellerPaymentDto) {
    return 'This action adds a new sellerPayment';
  }

  findAll() {
    return `This action returns all sellerPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerPayment`;
  }

  update(id: number, updateSellerPaymentDto: UpdateSellerPaymentDto) {
    return `This action updates a #${id} sellerPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerPayment`;
  }
}
