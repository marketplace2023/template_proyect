import { Module } from '@nestjs/common';
import { ProductsSupplierController } from './products-supplier.controller';
import { ProductsSupplierService } from './products-supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsSupplier } from './entities/products-supplier.entity';
import { ProductsTemplate } from '../products-template/entities/products-template.entity';
import { ProductSupplierTaxesRel } from '../product-supplier-taxes-rel/entities/product-supplier-taxes-rel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsSupplier,
      ProductsTemplate,
      ProductSupplierTaxesRel,
    ]),
  ],
  controllers: [ProductsSupplierController],
  providers: [ProductsSupplierService],
})
export class ProductsSupplierModule {}
