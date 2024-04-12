import { Module } from '@nestjs/common';
import { DeliveryCarrierService } from './delivery_carrier.service';
import { DeliveryCarrierController } from './delivery_carrier.controller';

@Module({
  controllers: [DeliveryCarrierController],
  providers: [DeliveryCarrierService],
})
export class DeliveryCarrierModule {}
