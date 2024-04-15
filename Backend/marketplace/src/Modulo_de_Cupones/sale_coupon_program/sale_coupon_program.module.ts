import { Module } from '@nestjs/common';
import { SaleCouponProgramService } from './sale_coupon_program.service';
import { SaleCouponProgramController } from './sale_coupon_program.controller';

@Module({
  controllers: [SaleCouponProgramController],
  providers: [SaleCouponProgramService],
})
export class SaleCouponProgramModule {}
