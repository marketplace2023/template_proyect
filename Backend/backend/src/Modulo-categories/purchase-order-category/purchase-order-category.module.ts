import { Module } from '@nestjs/common';
import { PurchaseOrderCategoryService } from './purchase-order-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrderCategoryController } from './purchase-order-category.controller';
import { PurchaseOrderCategory } from './entities/purchase-order-category.entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import { ProductAttributeCategory } from '../product-attribute-category/entities/product-attribute-category.entity';
import { ProductCategoryImage } from '../product-category-image/entities/product-category-image.entity';
import { CategoryDescription } from '../category-description/entities/category-description.entity';
import { CategoryImageGallery } from '../category-image-gallery/entities/category-image-gallery.entity';
import { CrmTagCategory } from '../crm-tag-category/entities/crm-tag-category.entity';
import { SaleOrderCategory } from '../sale-order-category/entities/sale-order-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PurchaseOrderCategory,
      ProductsCategory,
      ProductAttributeCategory,
      ProductCategoryImage,
      CategoryDescription,
      CategoryImageGallery,
      CrmTagCategory,
      SaleOrderCategory,
    ]),
  ],
  controllers: [PurchaseOrderCategoryController],
  providers: [PurchaseOrderCategoryService],
})
export class PurchaseOrderCategoryModule {}
