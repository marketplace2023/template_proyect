import { Module } from '@nestjs/common';
import { ProductPricelistService } from './product_pricelist.service';
import { ProductPricelistController } from './product_pricelist.controller';

@Module({
  controllers: [ProductPricelistController],
  providers: [ProductPricelistService],
})
export class ProductPricelistModule {}
