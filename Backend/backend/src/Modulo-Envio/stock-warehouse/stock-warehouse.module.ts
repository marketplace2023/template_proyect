import { Module } from '@nestjs/common';
import { StockWarehouseController } from './stock-warehouse.controller';
import { StockWarehouseService } from './stock-warehouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockWarehouse } from './entities/stock-warehouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockWarehouse])],
  controllers: [StockWarehouseController],
  providers: [StockWarehouseService],
})
export class StockWarehouseModule {}
