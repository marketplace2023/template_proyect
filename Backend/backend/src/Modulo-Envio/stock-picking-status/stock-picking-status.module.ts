import { Module } from '@nestjs/common';
import { StockPickingStatusController } from './stock-picking-status.controller';
import { StockPickingStatusService } from './stock-picking-status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingStatus } from './entities/stock-picking-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingStatus])],
  controllers: [StockPickingStatusController],
  providers: [StockPickingStatusService],
})
export class StockPickingStatusModule {}
