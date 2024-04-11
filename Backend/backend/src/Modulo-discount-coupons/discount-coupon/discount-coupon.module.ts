import { Module } from '@nestjs/common';
import { DiscountCouponController } from './discount-coupon.controller';
import { DiscountCouponService } from './discount-coupon.service';
import { DiscountCoupon } from './entities/discount-coupon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountCoupon])],
  controllers: [DiscountCouponController],
  providers: [DiscountCouponService],
})
export class DiscountCouponModule {}
