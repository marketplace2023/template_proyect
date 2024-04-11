import { Module } from '@nestjs/common';
import { DeliveryTrackingEventController } from './delivery-tracking-event.controller';
import { DeliveryTrackingEventService } from './delivery-tracking-event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryTrackingEvent } from './entities/delivery-tracking-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryTrackingEvent])],
  controllers: [DeliveryTrackingEventController],
  providers: [DeliveryTrackingEventService],
})
export class DeliveryTrackingEventModule {}
