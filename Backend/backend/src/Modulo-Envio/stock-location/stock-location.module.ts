import { Module } from '@nestjs/common';
import { StockLocationController } from './stock-location.controller';
import { StockLocationService } from './stock-location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockLocation } from './entities/stock-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockLocation])],
  controllers: [StockLocationController],
  providers: [StockLocationService],
})
export class StockLocationModule {}
