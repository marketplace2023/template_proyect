import { Module } from '@nestjs/common';
import { DeliveryTrackingHistoryController } from './delivery-tracking-history.controller';
import { DeliveryTrackingHistoryService } from './delivery-tracking-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryTrackingHistory } from './entities/delivery-tracking-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryTrackingHistory])],
  controllers: [DeliveryTrackingHistoryController],
  providers: [DeliveryTrackingHistoryService],
})
export class DeliveryTrackingHistoryModule {}
