import { Module } from '@nestjs/common';
import { StockLocationService } from './stock_location.service';
import { StockLocationController } from './stock_location.controller';

@Module({
  controllers: [StockLocationController],
  providers: [StockLocationService],
})
export class StockLocationModule {}
