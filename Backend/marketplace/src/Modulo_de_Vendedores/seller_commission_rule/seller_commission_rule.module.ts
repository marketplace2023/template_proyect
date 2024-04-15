import { Module } from '@nestjs/common';
import { SellerCommissionRuleService } from './seller_commission_rule.service';
import { SellerCommissionRuleController } from './seller_commission_rule.controller';

@Module({
  controllers: [SellerCommissionRuleController],
  providers: [SellerCommissionRuleService],
})
export class SellerCommissionRuleModule {}
