import { Module } from '@nestjs/common';
import { StockMoveController } from './stock-move.controller';
import { StockMoveService } from './stock-move.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockMove } from './entities/stock-move.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockMove])],
  controllers: [StockMoveController],
  providers: [StockMoveService],
})
export class StockMoveModule {}
