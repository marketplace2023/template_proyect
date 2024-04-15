import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponUsageDto } from './create-sale_coupon_usage.dto';

export class UpdateSaleCouponUsageDto extends PartialType(CreateSaleCouponUsageDto) {}
