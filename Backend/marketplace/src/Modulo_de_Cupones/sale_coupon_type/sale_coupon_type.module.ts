import { Module } from '@nestjs/common';
import { SaleCouponTypeService } from './sale_coupon_type.service';
import { SaleCouponTypeController } from './sale_coupon_type.controller';

@Module({
  controllers: [SaleCouponTypeController],
  providers: [SaleCouponTypeService],
})
export class SaleCouponTypeModule {}
