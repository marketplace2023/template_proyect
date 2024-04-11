import { Module } from '@nestjs/common';
import { ResPartnerController } from './res-partner.controller';
import { ResPartnerService } from './res-partner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResPartner } from './entities/res-partner.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ResPartner,
      ChooseDeliveryPackage,
      ChooseDeliveryCarrier,
      DeliveryCarrier,
      DeliveryPackage,
      DeliveryShipment,
      OrderLine,
      ProductsTemplate,
      StockPickingLine,
      StockMove,
      StockPicking,
    ]),
  ],
  controllers: [ResPartnerController],
  providers: [ResPartnerService],
})
export class ResPartnerModule {}
