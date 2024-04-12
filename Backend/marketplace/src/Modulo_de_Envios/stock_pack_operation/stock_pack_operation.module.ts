import { Module } from '@nestjs/common';
import { StockPackOperationService } from './stock_pack_operation.service';
import { StockPackOperationController } from './stock_pack_operation.controller';

@Module({
  controllers: [StockPackOperationController],
  providers: [StockPackOperationService],
})
export class StockPackOperationModule {}
