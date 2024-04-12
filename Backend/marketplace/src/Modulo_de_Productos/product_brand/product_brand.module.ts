import { Module } from '@nestjs/common';
import { ProductBrandService } from './product_brand.service';
import { ProductBrandController } from './product_brand.controller';

@Module({
  controllers: [ProductBrandController],
  providers: [ProductBrandService],
})
export class ProductBrandModule {}
