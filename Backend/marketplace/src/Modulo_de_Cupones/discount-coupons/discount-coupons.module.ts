import { Module } from '@nestjs/common';
import { DiscountCouponsService } from './discount-coupons.service';
import { DiscountCouponsController } from './discount-coupons.controller';

@Module({
  controllers: [DiscountCouponsController],
  providers: [DiscountCouponsService],
})
export class DiscountCouponsModule {}
