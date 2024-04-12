import { Module } from '@nestjs/common';
import { StockPickingPackageService } from './stock_picking_package.service';
import { StockPickingPackageController } from './stock_picking_package.controller';

@Module({
  controllers: [StockPickingPackageController],
  providers: [StockPickingPackageService],
})
export class StockPickingPackageModule {}
