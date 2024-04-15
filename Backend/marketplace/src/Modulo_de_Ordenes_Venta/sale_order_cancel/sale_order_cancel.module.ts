import { Module } from '@nestjs/common';
import { SaleOrderCancelService } from './sale_order_cancel.service';
import { SaleOrderCancelController } from './sale_order_cancel.controller';

@Module({
  controllers: [SaleOrderCancelController],
  providers: [SaleOrderCancelService],
})
export class SaleOrderCancelModule {}
