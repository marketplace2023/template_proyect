import { Module } from '@nestjs/common';
import { StockMoveLineService } from './stock_move_line.service';
import { StockMoveLineController } from './stock_move_line.controller';

@Module({
  controllers: [StockMoveLineController],
  providers: [StockMoveLineService],
})
export class StockMoveLineModule {}
