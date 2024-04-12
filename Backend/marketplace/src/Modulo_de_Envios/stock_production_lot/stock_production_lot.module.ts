import { Module } from '@nestjs/common';
import { StockProductionLotService } from './stock_production_lot.service';
import { StockProductionLotController } from './stock_production_lot.controller';

@Module({
  controllers: [StockProductionLotController],
  providers: [StockProductionLotService],
})
export class StockProductionLotModule {}
