import { Module } from '@nestjs/common';
import { SaleCouponReportController } from './sale-coupon-report.controller';
import { SaleCouponReportService } from './sale-coupon-report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCouponReport } from './entities/sale-coupon-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCouponReport])],
  controllers: [SaleCouponReportController],
  providers: [SaleCouponReportService],
})
export class SaleCouponReportModule {}
