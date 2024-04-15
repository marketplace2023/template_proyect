import { Module } from '@nestjs/common';
import { PurchaseOrderLineService } from './purchase_order_line.service';
import { PurchaseOrderLineController } from './purchase_order_line.controller';

@Module({
  controllers: [PurchaseOrderLineController],
  providers: [PurchaseOrderLineService],
})
export class PurchaseOrderLineModule {}
