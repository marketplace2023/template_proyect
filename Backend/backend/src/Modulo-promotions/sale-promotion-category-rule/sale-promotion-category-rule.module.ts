import { Module } from '@nestjs/common';
import { SalePromotionCategoryRuleController } from './sale-promotion-category-rule.controller';
import { SalePromotionCategoryRuleService } from './sale-promotion-category-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionCategoryRule } from './entities/sale-promotion-category-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionCategoryRule])],
  controllers: [SalePromotionCategoryRuleController],
  providers: [SalePromotionCategoryRuleService],
})
export class SalePromotionCategoryRuleModule {}
