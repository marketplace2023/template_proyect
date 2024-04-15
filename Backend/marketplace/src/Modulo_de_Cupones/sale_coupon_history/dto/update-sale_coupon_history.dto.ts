import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponHistoryDto } from './create-sale_coupon_history.dto';

export class UpdateSaleCouponHistoryDto extends PartialType(CreateSaleCouponHistoryDto) {}
