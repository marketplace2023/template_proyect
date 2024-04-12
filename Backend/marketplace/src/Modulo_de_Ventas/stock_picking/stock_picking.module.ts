import { Module } from '@nestjs/common';
import { StockPickingService } from './stock_picking.service';
import { StockPickingController } from './stock_picking.controller';

@Module({
  controllers: [StockPickingController],
  providers: [StockPickingService],
})
export class StockPickingModule {}
