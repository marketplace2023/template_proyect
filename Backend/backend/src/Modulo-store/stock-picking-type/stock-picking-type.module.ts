import { Module } from '@nestjs/common';
import { StockPickingTypeController } from './stock-picking-type.controller';
import { StockPickingTypeService } from './stock-picking-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingType } from './entities/stock-picking-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingType])],
  controllers: [StockPickingTypeController],
  providers: [StockPickingTypeService],
})
export class StockPickingTypeModule {}
