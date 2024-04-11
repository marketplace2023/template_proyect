import { Module } from '@nestjs/common';
import { ProductsTemplateController } from './products-template.controller';
import { ProductsTemplateService } from './products-template.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsTemplate } from './entities/products-template.entity';
import { ProductAccessoryRel } from '../product-accessory-rel/entities/product-accessory-rel.entity';
import { ProductImage } from '../product-image/entities/product-image.entity';
import { ProductsAttribute } from '../products-attribute/entities/products-attribute.entity';
import { ProductAlternativeRel } from '../product-alternative-rel/entities/product-alternative-rel.entity';
import { ProductsSupplier } from '../products-supplier/entities/products-supplier.entity';
import { Products } from '../products/entities/products.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsTemplate,
      ProductAccessoryRel,
      ProductImage,
      ProductsAttribute,
      ProductAlternativeRel,
      ProductsSupplier,
      Products,
      ChooseDeliveryPackage,
      ChooseDeliveryCarrier,
      DeliveryCarrier,
      DeliveryPackage,
      DeliveryShipment,
      OrderLine,
      ResPartner,
      StockPickingLine,
      StockMove,
      StockPicking,
    ]),
  ],
  controllers: [ProductsTemplateController],
  providers: [ProductsTemplateService],
})
export class ProductsTemplateModule {}
