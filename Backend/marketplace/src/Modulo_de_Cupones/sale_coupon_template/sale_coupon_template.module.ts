import { Module } from '@nestjs/common';
import { SaleCouponTemplateService } from './sale_coupon_template.service';
import { SaleCouponTemplateController } from './sale_coupon_template.controller';

@Module({
  controllers: [SaleCouponTemplateController],
  providers: [SaleCouponTemplateService],
})
export class SaleCouponTemplateModule {}
