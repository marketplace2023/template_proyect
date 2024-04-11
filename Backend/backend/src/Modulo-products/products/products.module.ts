import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { ProductsCategory } from '../products-category/entities/products-category.entity';
import { ProductsPricelist } from '../products-pricelist/entities/products-pricelist.entity';
import { ProductAccessoryRel } from '../product-accessory-rel/entities/product-accessory-rel.entity';
import { ProductAlternativeRel } from '../product-alternative-rel/entities/product-alternative-rel.entity';
import { ProductProductStockTrackConfirmationRel } from '../product-product-stock-track-confirmation-rel/entities/product-product-stock-track-confirmation-rel.entity';
import { ProductSupplierTaxesRel } from '../product-supplier-taxes-rel/entities/product-supplier-taxes-rel.entity';
import { ProductTag } from '../product-tag/entities/product-tag.entity';
import { ProductTaxesRel } from '../product-taxes-rel/entities/product-taxes-rel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Products,
      ProductsCategory,
      ProductsPricelist,
      ProductAccessoryRel,
      ProductAlternativeRel,
      ProductProductStockTrackConfirmationRel,
      ProductSupplierTaxesRel,
      ProductTag,
      ProductTaxesRel,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
