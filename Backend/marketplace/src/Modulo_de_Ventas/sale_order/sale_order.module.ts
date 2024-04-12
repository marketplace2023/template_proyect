import { Module } from '@nestjs/common';
import { SaleOrderService } from './sale_order.service';
import { SaleOrderController } from './sale_order.controller';

@Module({
  controllers: [SaleOrderController],
  providers: [SaleOrderService],
})
export class SaleOrderModule {}
