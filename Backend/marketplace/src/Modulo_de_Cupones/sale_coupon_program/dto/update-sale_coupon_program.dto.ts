import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponProgramDto } from './create-sale_coupon_program.dto';

export class UpdateSaleCouponProgramDto extends PartialType(CreateSaleCouponProgramDto) {}
