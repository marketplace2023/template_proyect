import { Module } from '@nestjs/common';
import { SaleCouponProgramController } from './sale-coupon-program.controller';
import { SaleCouponProgramService } from './sale-coupon-program.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCouponProgram } from './entities/sale-coupon-program.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCouponProgram])],
  controllers: [SaleCouponProgramController],
  providers: [SaleCouponProgramService],
})
export class SaleCouponProgramModule {}
