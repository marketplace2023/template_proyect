import { Module } from '@nestjs/common';
import { StockScrapService } from './stock_scrap.service';
import { StockScrapController } from './stock_scrap.controller';

@Module({
  controllers: [StockScrapController],
  providers: [StockScrapService],
})
export class StockScrapModule {}
