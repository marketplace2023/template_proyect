import { Module } from '@nestjs/common';
import { IrRuleController } from './ir-rule.controller';
import { IrRuleService } from './ir-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrRule } from './entities/ir-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IrRule])],
  controllers: [IrRuleController],
  providers: [IrRuleService],
})
export class IrRuleModule {}
