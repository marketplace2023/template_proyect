import { Module } from '@nestjs/common';
import { StockWarehouseService } from './stock_warehouse.service';
import { StockWarehouseController } from './stock_warehouse.controller';

@Module({
  controllers: [StockWarehouseController],
  providers: [StockWarehouseService],
})
export class StockWarehouseModule {}
