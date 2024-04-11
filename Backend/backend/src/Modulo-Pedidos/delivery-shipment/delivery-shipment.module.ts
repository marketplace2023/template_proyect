import { Module } from '@nestjs/common';
import { DeliveryShipmentController } from './delivery-shipment.controller';
import { DeliveryShipmentService } from './delivery-shipment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryShipment } from './entities/delivery-shipment.entity';
import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeliveryShipment,
      ChooseDeliveryCarrier,
      ChooseDeliveryPackage,
    ]),
  ],
  controllers: [DeliveryShipmentController],
  providers: [DeliveryShipmentService],
})
export class DeliveryShipmentModule {}
