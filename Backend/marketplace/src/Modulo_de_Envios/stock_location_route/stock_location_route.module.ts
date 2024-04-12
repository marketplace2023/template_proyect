import { Module } from '@nestjs/common';
import { StockLocationRouteService } from './stock_location_route.service';
import { StockLocationRouteController } from './stock_location_route.controller';

@Module({
  controllers: [StockLocationRouteController],
  providers: [StockLocationRouteService],
})
export class StockLocationRouteModule {}
