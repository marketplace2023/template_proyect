import { Module } from '@nestjs/common';
import { SaleCouponValidationService } from './sale_coupon_validation.service';
import { SaleCouponValidationController } from './sale_coupon_validation.controller';

@Module({
  controllers: [SaleCouponValidationController],
  providers: [SaleCouponValidationService],
})
export class SaleCouponValidationModule {}
