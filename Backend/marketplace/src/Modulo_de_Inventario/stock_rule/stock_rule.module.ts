import { Module } from '@nestjs/common';
import { StockRuleService } from './stock_rule.service';
import { StockRuleController } from './stock_rule.controller';

@Module({
  controllers: [StockRuleController],
  providers: [StockRuleService],
})
export class StockRuleModule {}
