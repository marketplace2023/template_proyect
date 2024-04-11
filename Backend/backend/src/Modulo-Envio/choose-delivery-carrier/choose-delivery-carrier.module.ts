import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChooseDeliveryCarrierController } from './choose-delivery-carrier.controller';
import { ChooseDeliveryCarrier } from './entities/choose-delivery-carrier.entity';
import { ChooseDeliveryCarrierService } from './choose-delivery-carrier.service';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ChooseDeliveryCarrier,
      DeliveryPackage,
      DeliveryShipment,
    ]),
  ],
  controllers: [ChooseDeliveryCarrierController],
  providers: [ChooseDeliveryCarrierService],
})
export class ChooseDeliveryCarrierModule {}
