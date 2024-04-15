import { Injectable } from '@nestjs/common';
import { CreateSellerCommissionRuleDto } from './dto/create-seller_commission_rule.dto';
import { UpdateSellerCommissionRuleDto } from './dto/update-seller_commission_rule.dto';

@Injectable()
export class SellerCommissionRuleService {
  create(createSellerCommissionRuleDto: CreateSellerCommissionRuleDto) {
    return 'This action adds a new sellerCommissionRule';
  }

  findAll() {
    return `This action returns all sellerCommissionRule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerCommissionRule`;
  }

  update(id: number, updateSellerCommissionRuleDto: UpdateSellerCommissionRuleDto) {
    return `This action updates a #${id} sellerCommissionRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerCommissionRule`;
  }
}
