import { Module } from '@nestjs/common';
import { StockMoveService } from './stock_move.service';
import { StockMoveController } from './stock_move.controller';

@Module({
  controllers: [StockMoveController],
  providers: [StockMoveService],
})
export class StockMoveModule {}
