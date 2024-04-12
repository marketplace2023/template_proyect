import { Module } from '@nestjs/common';
import { DeliveryCarrierServiceService } from './delivery_carrier_service.service';
import { DeliveryCarrierServiceController } from './delivery_carrier_service.controller';

@Module({
  controllers: [DeliveryCarrierServiceController],
  providers: [DeliveryCarrierServiceService],
})
export class DeliveryCarrierServiceModule {}
