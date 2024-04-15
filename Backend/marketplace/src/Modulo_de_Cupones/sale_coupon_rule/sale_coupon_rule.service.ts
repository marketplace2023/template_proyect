import { Injectable } from '@nestjs/common';
import { CreateSaleCouponRuleDto } from './dto/create-sale_coupon_rule.dto';
import { UpdateSaleCouponRuleDto } from './dto/update-sale_coupon_rule.dto';

@Injectable()
export class SaleCouponRuleService {
  create(createSaleCouponRuleDto: CreateSaleCouponRuleDto) {
    return 'This action adds a new saleCouponRule';
  }

  findAll() {
    return `This action returns all saleCouponRule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponRule`;
  }

  update(id: number, updateSaleCouponRuleDto: UpdateSaleCouponRuleDto) {
    return `This action updates a #${id} saleCouponRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponRule`;
  }
}
