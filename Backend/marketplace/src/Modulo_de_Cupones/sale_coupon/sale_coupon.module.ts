import { Module } from '@nestjs/common';
import { SaleCouponService } from './sale_coupon.service';
import { SaleCouponController } from './sale_coupon.controller';

@Module({
  controllers: [SaleCouponController],
  providers: [SaleCouponService],
})
export class SaleCouponModule {}
