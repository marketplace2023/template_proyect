import { Module } from '@nestjs/common';
import { CouponCodeController } from './coupon-code.controller';
import { CouponCodeService } from './coupon-code.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponCode } from './entities/coupon-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CouponCode])],
  controllers: [CouponCodeController],
  providers: [CouponCodeService],
})
export class CouponCodeModule {}
