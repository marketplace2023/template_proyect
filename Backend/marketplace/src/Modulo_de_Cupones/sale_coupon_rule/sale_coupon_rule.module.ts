import { Module } from '@nestjs/common';
import { SaleCouponRuleService } from './sale_coupon_rule.service';
import { SaleCouponRuleController } from './sale_coupon_rule.controller';

@Module({
  controllers: [SaleCouponRuleController],
  providers: [SaleCouponRuleService],
})
export class SaleCouponRuleModule {}
