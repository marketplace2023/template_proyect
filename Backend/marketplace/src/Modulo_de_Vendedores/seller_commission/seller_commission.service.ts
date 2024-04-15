import { Injectable } from '@nestjs/common';
import { CreateSellerCommissionDto } from './dto/create-seller_commission.dto';
import { UpdateSellerCommissionDto } from './dto/update-seller_commission.dto';

@Injectable()
export class SellerCommissionService {
  create(createSellerCommissionDto: CreateSellerCommissionDto) {
    return 'This action adds a new sellerCommission';
  }

  findAll() {
    return `This action returns all sellerCommission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerCommission`;
  }

  update(id: number, updateSellerCommissionDto: UpdateSellerCommissionDto) {
    return `This action updates a #${id} sellerCommission`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerCommission`;
  }
}
