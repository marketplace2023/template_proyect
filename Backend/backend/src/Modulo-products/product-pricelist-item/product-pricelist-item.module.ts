import { Module } from '@nestjs/common';
import { ProductPricelistItemController } from './product-pricelist-item.controller';
import { ProductPricelistItemService } from './product-pricelist-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPricelistItem } from './entities/product-pricelist-item.entity';
import { ProductsPricelist } from '../products-pricelist/entities/products-pricelist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPricelistItem, ProductsPricelist]),
  ],
  controllers: [ProductPricelistItemController],
  providers: [ProductPricelistItemService],
})
export class ProductPricelistItemModule {}
