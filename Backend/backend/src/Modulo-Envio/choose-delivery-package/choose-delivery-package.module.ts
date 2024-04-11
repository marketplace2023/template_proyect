import { Module } from '@nestjs/common';
import { ChooseDeliveryPackageService } from './choose-delivery-package.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChooseDeliveryPackageController } from './choose-delivery-package.controller';
import { ChooseDeliveryPackage } from './entities/choose-delivery-package.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { StockPickingTracking } from '../stock-picking-tracking/entities/stock-picking-tracking.entity';
import { StockShipmentWeight } from '../stock-shipment-weight/entities/stock-shipment-weight.entity';
import { StockShipmentVolume } from '../stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentTracking } from '../stock-shipment-tracking/entities/stock-shipment-tracking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ChooseDeliveryPackage,
      StockPickingLine,
      DeliveryShipment,
      DeliveryPackage,
      StockPickingTracking,
      StockShipmentWeight,
      StockShipmentVolume,
      StockShipmentTracking,
    ]),
  ],
  controllers: [ChooseDeliveryPackageController],
  providers: [ChooseDeliveryPackageService],
})
export class ChooseDeliveryPackageModule {}
