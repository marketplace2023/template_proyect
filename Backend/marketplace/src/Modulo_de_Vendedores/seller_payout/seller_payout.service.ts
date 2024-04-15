import { Injectable } from '@nestjs/common';
import { CreateSellerPayoutDto } from './dto/create-seller_payout.dto';
import { UpdateSellerPayoutDto } from './dto/update-seller_payout.dto';

@Injectable()
export class SellerPayoutService {
  create(createSellerPayoutDto: CreateSellerPayoutDto) {
    return 'This action adds a new sellerPayout';
  }

  findAll() {
    return `This action returns all sellerPayout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerPayout`;
  }

  update(id: number, updateSellerPayoutDto: UpdateSellerPayoutDto) {
    return `This action updates a #${id} sellerPayout`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerPayout`;
  }
}
