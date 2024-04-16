import { Module } from '@nestjs/common';
import { StockWarehouseOrderpointService } from './stock_warehouse_orderpoint.service';
import { StockWarehouseOrderpointController } from './stock_warehouse_orderpoint.controller';

@Module({
  controllers: [StockWarehouseOrderpointController],
  providers: [StockWarehouseOrderpointService],
})
export class StockWarehouseOrderpointModule {}
