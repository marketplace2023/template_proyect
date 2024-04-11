import { Module } from '@nestjs/common';
import { SaleCouponRuleController } from './sale-coupon-rule.controller';
import { SaleCouponRuleService } from './sale-coupon-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCouponRule } from './entities/sale-coupon-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCouponRule])],
  controllers: [SaleCouponRuleController],
  providers: [SaleCouponRuleService],
})
export class SaleCouponRuleModule {}
