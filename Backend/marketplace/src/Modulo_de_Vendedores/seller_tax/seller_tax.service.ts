import { Injectable } from '@nestjs/common';
import { CreateSellerTaxDto } from './dto/create-seller_tax.dto';
import { UpdateSellerTaxDto } from './dto/update-seller_tax.dto';

@Injectable()
export class SellerTaxService {
  create(createSellerTaxDto: CreateSellerTaxDto) {
    return 'This action adds a new sellerTax';
  }

  findAll() {
    return `This action returns all sellerTax`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerTax`;
  }

  update(id: number, updateSellerTaxDto: UpdateSellerTaxDto) {
    return `This action updates a #${id} sellerTax`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerTax`;
  }
}
