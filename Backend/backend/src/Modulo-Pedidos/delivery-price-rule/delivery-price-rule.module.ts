import { Module } from '@nestjs/common';
import { DeliveryPriceRuleController } from './delivery-price-rule.controller';
import { DeliveryPriceRuleService } from './delivery-price-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryPriceRule } from './entities/delivery-price-rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryPriceRule])],
  controllers: [DeliveryPriceRuleController],
  providers: [DeliveryPriceRuleService],
})
export class DeliveryPriceRuleModule {}
