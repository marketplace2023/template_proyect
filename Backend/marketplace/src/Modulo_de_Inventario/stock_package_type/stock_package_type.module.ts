import { Module } from '@nestjs/common';
import { StockPackageTypeService } from './stock_package_type.service';
import { StockPackageTypeController } from './stock_package_type.controller';

@Module({
  controllers: [StockPackageTypeController],
  providers: [StockPackageTypeService],
})
export class StockPackageTypeModule {}
