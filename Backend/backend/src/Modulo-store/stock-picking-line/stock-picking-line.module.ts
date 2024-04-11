import { Module } from '@nestjs/common';
import { StockPickingLineController } from './stock-picking-line.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingLine } from './entities/stock-picking-line.entity';
import { StockPickingLineService } from './stock-picking-line.service';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingLine])],
  controllers: [StockPickingLineController],
  providers: [StockPickingLineService],
})
export class StockPickingLineModule {}
