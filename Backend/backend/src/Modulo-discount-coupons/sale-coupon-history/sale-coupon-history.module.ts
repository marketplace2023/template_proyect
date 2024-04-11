import { Module } from '@nestjs/common';
import { SaleCouponHistoryController } from './sale-coupon-history.controller';
import { SaleCouponHistoryService } from './sale-coupon-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCouponHistory } from './entity/sale-coupon-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCouponHistory])],
  controllers: [SaleCouponHistoryController],
  providers: [SaleCouponHistoryService],
})
export class SaleCouponHistoryModule {}
