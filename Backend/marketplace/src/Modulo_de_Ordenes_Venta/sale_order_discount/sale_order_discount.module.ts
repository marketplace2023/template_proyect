import { Module } from '@nestjs/common';
import { SaleOrderDiscountService } from './sale_order_discount.service';
import { SaleOrderDiscountController } from './sale_order_discount.controller';

@Module({
  controllers: [SaleOrderDiscountController],
  providers: [SaleOrderDiscountService],
})
export class SaleOrderDiscountModule {}
