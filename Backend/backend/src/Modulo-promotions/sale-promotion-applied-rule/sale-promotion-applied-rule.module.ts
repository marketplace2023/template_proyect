import { Module } from '@nestjs/common';
import { SalePromotionAppliedRuleController } from './sale-promotion-applied-rule.controller';
import { SalePromotionAppliedRuleService } from './sale-promotion-applied-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionAppliedRule } from './entities/sale-promotion-applied-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionAppliedRule])],
  controllers: [SalePromotionAppliedRuleController],
  providers: [SalePromotionAppliedRuleService],
})
export class SalePromotionAppliedRuleModule {}
