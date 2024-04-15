import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponValidationDto } from './create-sale_coupon_validation.dto';

export class UpdateSaleCouponValidationDto extends PartialType(CreateSaleCouponValidationDto) {}
