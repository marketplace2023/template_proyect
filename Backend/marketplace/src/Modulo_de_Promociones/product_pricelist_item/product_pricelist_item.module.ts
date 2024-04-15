import { Module } from '@nestjs/common';
import { ProductPricelistItemService } from './product_pricelist_item.service';
import { ProductPricelistItemController } from './product_pricelist_item.controller';

@Module({
  controllers: [ProductPricelistItemController],
  providers: [ProductPricelistItemService],
})
export class ProductPricelistItemModule {}
