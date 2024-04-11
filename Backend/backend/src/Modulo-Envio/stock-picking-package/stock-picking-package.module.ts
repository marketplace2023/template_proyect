import { Module } from '@nestjs/common';
import { StockPickingPackageController } from './stock-picking-package.controller';
import { StockPickingPackageService } from './stock-picking-package.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingPackage } from './entities/stock-picking-package.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingPackage])],
  controllers: [StockPickingPackageController],
  providers: [StockPickingPackageService],
})
export class StockPickingPackageModule {}
