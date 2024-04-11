import { Module } from '@nestjs/common';
import { StockPickingBatchController } from './stock-picking-batch.controller';
import { StockPickingBatchService } from './stock-picking-batch.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingBatch } from './entities/stock-picking-batch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingBatch])],
  controllers: [StockPickingBatchController],
  providers: [StockPickingBatchService],
})
export class StockPickingBatchModule {}
