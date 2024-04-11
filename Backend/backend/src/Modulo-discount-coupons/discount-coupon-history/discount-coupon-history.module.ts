import { Module } from '@nestjs/common';
import { DiscountCouponHistoryService } from './discount-coupon-history.service';
import { DiscountCouponHistoryController } from './discount-coupon-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountCouponHistory } from './entities/discount-coupon-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountCouponHistory])],
  providers: [DiscountCouponHistoryService],
  controllers: [DiscountCouponHistoryController],
})
export class DiscountCouponHistoryModule {}
