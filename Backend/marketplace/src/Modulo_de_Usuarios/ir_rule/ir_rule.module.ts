import { Module } from '@nestjs/common';
import { IrRuleService } from './ir_rule.service';
import { IrRuleController } from './ir_rule.controller';

@Module({
  controllers: [IrRuleController],
  providers: [IrRuleService],
})
export class IrRuleModule {}
