import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponDto } from './create-sale_coupon.dto';

export class UpdateSaleCouponDto extends PartialType(CreateSaleCouponDto) {}
