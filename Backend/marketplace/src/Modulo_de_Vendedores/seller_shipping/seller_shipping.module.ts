import { Module } from '@nestjs/common';
import { SellerShippingService } from './seller_shipping.service';
import { SellerShippingController } from './seller_shipping.controller';

@Module({
  controllers: [SellerShippingController],
  providers: [SellerShippingService],
})
export class SellerShippingModule {}
