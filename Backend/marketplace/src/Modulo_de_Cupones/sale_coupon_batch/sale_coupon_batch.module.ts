import { Module } from '@nestjs/common';
import { SaleCouponBatchService } from './sale_coupon_batch.service';
import { SaleCouponBatchController } from './sale_coupon_batch.controller';

@Module({
  controllers: [SaleCouponBatchController],
  providers: [SaleCouponBatchService],
})
export class SaleCouponBatchModule {}
