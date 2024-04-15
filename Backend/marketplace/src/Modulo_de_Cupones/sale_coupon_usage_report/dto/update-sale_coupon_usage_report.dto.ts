import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponUsageReportDto } from './create-sale_coupon_usage_report.dto';

export class UpdateSaleCouponUsageReportDto extends PartialType(CreateSaleCouponUsageReportDto) {}
