import { Module } from '@nestjs/common';
import { StockPickingPackageLineController } from './stock-picking-package-line.controller';
import { StockPickingPackageLineService } from './stock-picking-package-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingPackageLine } from './entities/stock-picking-package-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingPackageLine])],
  controllers: [StockPickingPackageLineController],
  providers: [StockPickingPackageLineService],
})
export class StockPickingPackageLineModule {}
