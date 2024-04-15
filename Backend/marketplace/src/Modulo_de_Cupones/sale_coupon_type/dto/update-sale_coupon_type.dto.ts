import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponTypeDto } from './create-sale_coupon_type.dto';

export class UpdateSaleCouponTypeDto extends PartialType(CreateSaleCouponTypeDto) {}
