import { Module } from '@nestjs/common';
import { StockPickingController } from './stock-picking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPicking } from './entities/stock-picking.entity';
import { StockPickingService } from './stock-picking.service';

@Module({
  imports: [TypeOrmModule.forFeature([StockPicking])],
  controllers: [StockPickingController],
  providers: [StockPickingService],
})
export class StockPickingModule {}
