import { Module } from '@nestjs/common';
import { DiscountRuleController } from './discount-rule.controller';
import { DiscountRuleService } from './discount-rule.service';
import { DiscountRule } from './entities/discount-rule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountRule])],
  controllers: [DiscountRuleController],
  providers: [DiscountRuleService],
})
export class DiscountRuleModule {}
