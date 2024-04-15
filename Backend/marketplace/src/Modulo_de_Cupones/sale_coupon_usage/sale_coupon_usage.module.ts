import { Module } from '@nestjs/common';
import { SaleCouponUsageService } from './sale_coupon_usage.service';
import { SaleCouponUsageController } from './sale_coupon_usage.controller';

@Module({
  controllers: [SaleCouponUsageController],
  providers: [SaleCouponUsageService],
})
export class SaleCouponUsageModule {}
