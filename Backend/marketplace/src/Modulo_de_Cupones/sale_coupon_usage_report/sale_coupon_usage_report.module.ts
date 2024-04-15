import { Module } from '@nestjs/common';
import { SaleCouponUsageReportService } from './sale_coupon_usage_report.service';
import { SaleCouponUsageReportController } from './sale_coupon_usage_report.controller';

@Module({
  controllers: [SaleCouponUsageReportController],
  providers: [SaleCouponUsageReportService],
})
export class SaleCouponUsageReportModule {}
