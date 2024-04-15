import { Injectable } from '@nestjs/common';
import { CreateSaleCouponConditionDto } from './dto/create-sale_coupon_condition.dto';
import { UpdateSaleCouponConditionDto } from './dto/update-sale_coupon_condition.dto';

@Injectable()
export class SaleCouponConditionService {
  create(createSaleCouponConditionDto: CreateSaleCouponConditionDto) {
    return 'This action adds a new saleCouponCondition';
  }

  findAll() {
    return `This action returns all saleCouponCondition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponCondition`;
  }

  update(id: number, updateSaleCouponConditionDto: UpdateSaleCouponConditionDto) {
    return `This action updates a #${id} saleCouponCondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponCondition`;
  }
}
