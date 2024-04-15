import { Injectable } from '@nestjs/common';
import { CreateSaleCouponRewardDto } from './dto/create-sale_coupon_reward.dto';
import { UpdateSaleCouponRewardDto } from './dto/update-sale_coupon_reward.dto';

@Injectable()
export class SaleCouponRewardService {
  create(createSaleCouponRewardDto: CreateSaleCouponRewardDto) {
    return 'This action adds a new saleCouponReward';
  }

  findAll() {
    return `This action returns all saleCouponReward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponReward`;
  }

  update(id: number, updateSaleCouponRewardDto: UpdateSaleCouponRewardDto) {
    return `This action updates a #${id} saleCouponReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponReward`;
  }
}
