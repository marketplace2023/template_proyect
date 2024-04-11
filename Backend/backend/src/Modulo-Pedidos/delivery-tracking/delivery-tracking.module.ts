import { Module } from '@nestjs/common';
import { DeliveryTrackingController } from './delivery-tracking.controller';
import { DeliveryTrackingService } from './delivery-tracking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryTracking } from './entities/delivery-tracking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryTracking])],
  controllers: [DeliveryTrackingController],
  providers: [DeliveryTrackingService],
})
export class DeliveryTrackingModule {}
