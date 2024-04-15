import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponBatchDto } from './create-sale_coupon_batch.dto';

export class UpdateSaleCouponBatchDto extends PartialType(CreateSaleCouponBatchDto) {}
