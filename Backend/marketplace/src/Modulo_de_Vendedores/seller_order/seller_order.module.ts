import { Module } from '@nestjs/common';
import { SellerOrderService } from './seller_order.service';
import { SellerOrderController } from './seller_order.controller';

@Module({
  controllers: [SellerOrderController],
  providers: [SellerOrderService],
})
export class SellerOrderModule {}
