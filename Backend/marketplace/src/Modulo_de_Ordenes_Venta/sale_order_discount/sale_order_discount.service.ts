import { Injectable } from '@nestjs/common';
import { CreateSaleOrderDiscountDto } from './dto/create-sale_order_discount.dto';
import { UpdateSaleOrderDiscountDto } from './dto/update-sale_order_discount.dto';

@Injectable()
export class SaleOrderDiscountService {
  create(createSaleOrderDiscountDto: CreateSaleOrderDiscountDto) {
    return 'This action adds a new saleOrderDiscount';
  }

  findAll() {
    return `This action returns all saleOrderDiscount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleOrderDiscount`;
  }

  update(id: number, updateSaleOrderDiscountDto: UpdateSaleOrderDiscountDto) {
    return `This action updates a #${id} saleOrderDiscount`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleOrderDiscount`;
  }
}
