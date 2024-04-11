import { Module } from '@nestjs/common';
import { ProductSupplierTaxesRelController } from './product-supplier-taxes-rel.controller';
import { ProductSupplierTaxesRelService } from './product-supplier-taxes-rel.service';
import { ProductSupplierTaxesRel } from './entities/product-supplier-taxes-rel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSupplierTaxesRel])],
  controllers: [ProductSupplierTaxesRelController],
  providers: [ProductSupplierTaxesRelService],
})
export class ProductSupplierTaxesRelModule {}
