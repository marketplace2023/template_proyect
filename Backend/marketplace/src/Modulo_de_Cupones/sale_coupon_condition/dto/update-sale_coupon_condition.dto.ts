import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponConditionDto } from './create-sale_coupon_condition.dto';

export class UpdateSaleCouponConditionDto extends PartialType(CreateSaleCouponConditionDto) {}
