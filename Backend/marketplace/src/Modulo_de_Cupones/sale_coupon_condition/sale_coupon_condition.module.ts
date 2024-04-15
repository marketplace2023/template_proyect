import { Module } from '@nestjs/common';
import { SaleCouponConditionService } from './sale_coupon_condition.service';
import { SaleCouponConditionController } from './sale_coupon_condition.controller';

@Module({
  controllers: [SaleCouponConditionController],
  providers: [SaleCouponConditionService],
})
export class SaleCouponConditionModule {}
