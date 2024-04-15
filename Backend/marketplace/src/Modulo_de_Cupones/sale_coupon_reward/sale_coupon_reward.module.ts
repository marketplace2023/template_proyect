import { Module } from '@nestjs/common';
import { SaleCouponRewardService } from './sale_coupon_reward.service';
import { SaleCouponRewardController } from './sale_coupon_reward.controller';

@Module({
  controllers: [SaleCouponRewardController],
  providers: [SaleCouponRewardService],
})
export class SaleCouponRewardModule {}
