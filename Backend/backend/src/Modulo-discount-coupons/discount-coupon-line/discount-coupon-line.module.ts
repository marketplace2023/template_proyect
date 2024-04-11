import { Module } from '@nestjs/common';
import { DiscountCouponLineController } from './discount-coupon-line.controller';
import { DiscountCouponLineService } from './discount-coupon-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountCouponLine } from './entities/discount-coupon-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountCouponLine])],
  controllers: [DiscountCouponLineController],
  providers: [DiscountCouponLineService],
})
export class DiscountCouponLineModule {}
