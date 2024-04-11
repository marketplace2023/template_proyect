import { Module } from '@nestjs/common';
import { SalePromotionCartRuleService } from './sale-promotion-cart-rule.service';
import { SalePromotionCartRule } from './entities/sale-promotion-cart-rule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionCartRuleController } from './sale-promotion-cart-rule.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionCartRule])],
  controllers: [SalePromotionCartRuleController],
  providers: [SalePromotionCartRuleService],
})
export class SalePromotionCartRuleModule {}
