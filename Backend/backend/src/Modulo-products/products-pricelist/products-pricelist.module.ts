import { Module } from '@nestjs/common';
import { ProductsPricelistController } from './products-pricelist.controller';
import { ProductsPricelistService } from './products-pricelist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsPricelist } from './entities/products-pricelist.entity';
import { ProductPricelistItem } from '../product-pricelist-item/entities/product-pricelist-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsPricelist, ProductPricelistItem]),
  ],
  controllers: [ProductsPricelistController],
  providers: [ProductsPricelistService],
})
export class ProductsPricelistModule {}
