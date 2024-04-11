import { Module } from '@nestjs/common';
import { ProductsBarcodeController } from './products-barcode.controller';
import { ProductsBarcodeService } from './products-barcode.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsBarcode } from './entities/products-barcode.entity';
import { ProductsAttribute } from '../products-attribute/entities/products-attribute.entity';
import { Products } from '../products/entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsBarcode, ProductsAttribute, Products]),
  ],
  controllers: [ProductsBarcodeController],
  providers: [ProductsBarcodeService],
})
export class ProductsBarcodeModule {}
