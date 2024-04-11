import { Module } from '@nestjs/common';
import { SalePromotionRuleController } from './sale-promotion-rule.controller';
import { SalePromotionRuleService } from './sale-promotion-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionRule } from './entities/sale-promotion-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionRule])],
  controllers: [SalePromotionRuleController],
  providers: [SalePromotionRuleService],
})
export class SalePromotionRuleModule {}
