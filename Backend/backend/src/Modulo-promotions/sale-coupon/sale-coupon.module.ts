import { Module } from '@nestjs/common';
import { SaleCouponController } from './sale-coupon.controller';
import { SaleCouponService } from './sale-coupon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCoupon } from './entities/sale-coupon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCoupon])],
  controllers: [SaleCouponController],
  providers: [SaleCouponService],
})
export class SaleCouponModule {}
