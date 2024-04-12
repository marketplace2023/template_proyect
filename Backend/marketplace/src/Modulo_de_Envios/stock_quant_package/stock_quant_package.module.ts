import { Module } from '@nestjs/common';
import { StockQuantPackageService } from './stock_quant_package.service';
import { StockQuantPackageController } from './stock_quant_package.controller';

@Module({
  controllers: [StockQuantPackageController],
  providers: [StockQuantPackageService],
})
export class StockQuantPackageModule {}
