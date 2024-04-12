import { Module } from '@nestjs/common';
import { SaleOrderLineService } from './sale-order-line.service';
import { SaleOrderLineController } from './sale-order-line.controller';

@Module({
  controllers: [SaleOrderLineController],
  providers: [SaleOrderLineService],
})
export class SaleOrderLineModule {}
