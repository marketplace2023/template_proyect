import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleCouponRewardDto } from './create-sale_coupon_reward.dto';

export class UpdateSaleCouponRewardDto extends PartialType(CreateSaleCouponRewardDto) {}
