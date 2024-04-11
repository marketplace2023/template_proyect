import { Module } from '@nestjs/common';
import { SaleCouponProgramLineController } from './sale-coupon-program-line.controller';
import { SaleCouponProgramLineService } from './sale-coupon-program-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCouponProgramLine } from './entities/sale-coupon-program-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCouponProgramLine])],
  controllers: [SaleCouponProgramLineController],
  providers: [SaleCouponProgramLineService],
})
export class SaleCouponProgramLineModule {}
