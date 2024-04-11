import { Module } from '@nestjs/common';
import { StockShipmentTrackingController } from './stock-shipment-tracking.controller';
import { StockShipmentTrackingService } from './stock-shipment-tracking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockShipmentTracking } from './entities/stock-shipment-tracking.entity';
import { ChooseDeliveryCarrier } from '../choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { OrderLine } from '../order-line/entities/order-line.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockMove } from '../stock-move/entities/stock-move.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
import { StockPickingPackage } from '../stock-picking-package/entities/stock-picking-package.entity';
import { StockPickingPackageLine } from '../stock-picking-package-line/entities/stock-picking-package-line.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StockShipmentTracking,
      ChooseDeliveryCarrier,
      DeliveryPackage,
      OrderLine,
      ProductsTemplate,
      ResPartner,
      StockPickingLine,
      StockMove,
      StockPicking,
      StockPickingType,
      StockPickingPackage,
      StockPickingPackageLine,
    ]),
  ],
  controllers: [StockShipmentTrackingController],
  providers: [StockShipmentTrackingService],
})
export class StockShipmentTrackingModule {}
