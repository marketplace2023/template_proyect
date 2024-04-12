import { Module } from '@nestjs/common';
import { StockPickingBatchService } from './stock_picking_batch.service';
import { StockPickingBatchController } from './stock_picking_batch.controller';

@Module({
  controllers: [StockPickingBatchController],
  providers: [StockPickingBatchService],
})
export class StockPickingBatchModule {}
