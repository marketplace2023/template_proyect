import { Module } from '@nestjs/common';
import { SalePromotionCustomerRuleController } from './sale-promotion-customer-rule.controller';
import { SalePromotionCustomerRuleService } from './sale-promotion-customer-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionCustomerRule } from './entities/sale-promotion-customer-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionCustomerRule])],
  controllers: [SalePromotionCustomerRuleController],
  providers: [SalePromotionCustomerRuleService],
})
export class SalePromotionCustomerRuleModule {}
