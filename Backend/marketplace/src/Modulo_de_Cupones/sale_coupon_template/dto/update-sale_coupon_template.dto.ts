import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponTemplateDto } from './create-sale_coupon_template.dto';

export class UpdateSaleCouponTemplateDto extends PartialType(CreateSaleCouponTemplateDto) {}
