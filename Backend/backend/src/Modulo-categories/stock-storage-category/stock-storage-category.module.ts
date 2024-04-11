import { Module } from '@nestjs/common';
import { StockStorageCategoryController } from './stock-storage-category.controller';
import { StockStorageCategoryService } from './stock-storage-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockStorageCategory } from './entities/stock-storage-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockStorageCategory])],
  controllers: [StockStorageCategoryController],
  providers: [StockStorageCategoryService],
})
export class StockStorageCategoryModule {}
