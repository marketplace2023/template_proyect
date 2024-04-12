import { Module } from '@nestjs/common';
import { StockQuantService } from './stock_quant.service';
import { StockQuantController } from './stock_quant.controller';

@Module({
  controllers: [StockQuantController],
  providers: [StockQuantService],
})
export class StockQuantModule {}
