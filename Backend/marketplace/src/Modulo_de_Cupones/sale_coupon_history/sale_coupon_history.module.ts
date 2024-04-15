import { Module } from '@nestjs/common';
import { SaleCouponHistoryService } from './sale_coupon_history.service';
import { SaleCouponHistoryController } from './sale_coupon_history.controller';

@Module({
  controllers: [SaleCouponHistoryController],
  providers: [SaleCouponHistoryService],
})
export class SaleCouponHistoryModule {}
