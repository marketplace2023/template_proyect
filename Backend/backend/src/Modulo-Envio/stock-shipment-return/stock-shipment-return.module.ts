import { Module } from '@nestjs/common';
import { StockShipmentReturnController } from './stock-shipment-return.controller';
import { StockShipmentReturnService } from './stock-shipment-return.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockShipmentReturn } from './entities/stock-shipment-return.entity';
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
      StockShipmentReturn,
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
  controllers: [StockShipmentReturnController],
  providers: [StockShipmentReturnService],
})
export class StockShipmentReturnModule {}
