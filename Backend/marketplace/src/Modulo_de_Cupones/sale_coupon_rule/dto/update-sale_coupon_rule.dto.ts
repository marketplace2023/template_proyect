import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponRuleDto } from './create-sale_coupon_rule.dto';

export class UpdateSaleCouponRuleDto extends PartialType(CreateSaleCouponRuleDto) {}
