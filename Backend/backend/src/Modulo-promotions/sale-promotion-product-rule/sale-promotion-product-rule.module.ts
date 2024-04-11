import { Module } from '@nestjs/common';
import { SalePromotionProductRuleController } from './sale-promotion-product-rule.controller';
import { SalePromotionProductRuleService } from './sale-promotion-product-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionProductRule } from './entities/sale-promotion-product-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionProductRule])],
  controllers: [SalePromotionProductRuleController],
  providers: [SalePromotionProductRuleService],
})
export class SalePromotionProductRuleModule {}
