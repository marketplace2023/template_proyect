import { Module } from '@nestjs/common';
import { StockStorageCategoryCapacityController } from './stock-storage-category-capacity.controller';
import { StockStorageCategoryCapacityService } from './stock-storage-category-capacity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockStorageCategoryCapacity } from './entities/stock-storage-category-capacity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockStorageCategoryCapacity])],
  controllers: [StockStorageCategoryCapacityController],
  providers: [StockStorageCategoryCapacityService],
})
export class StockStorageCategoryCapacityModule {}
