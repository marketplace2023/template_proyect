import { Module } from '@nestjs/common';
import { StockPickingTrackingController } from './stock-picking-tracking.controller';
import { StockPickingTrackingService } from './stock-picking-tracking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingTracking } from './entities/stock-picking-tracking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingTracking])],
  controllers: [StockPickingTrackingController],
  providers: [StockPickingTrackingService],
})
export class StockPickingTrackingModule {}
