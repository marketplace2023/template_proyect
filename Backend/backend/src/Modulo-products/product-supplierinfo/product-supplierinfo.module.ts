import { Module } from '@nestjs/common';
import { ProductSupplierinfoController } from './product-supplierinfo.controller';
import { ProductSupplierinfoService } from './product-supplierinfo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplierinfo } from './entities/product-supplierinfo.entity';
import { ProductSupplierTaxesRel } from '../product-supplier-taxes-rel/entities/product-supplier-taxes-rel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductSupplierinfo, ProductSupplierTaxesRel]),
  ],
  controllers: [ProductSupplierinfoController],
  providers: [ProductSupplierinfoService],
})
export class ProductSupplierinfoModule {}
