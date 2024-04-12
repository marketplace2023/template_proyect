import { Module } from '@nestjs/common';
import { ProductProductService } from './product_product.service';
import { ProductProductController } from './product_product.controller';

@Module({
  controllers: [ProductProductController],
  providers: [ProductProductService],
})
export class ProductProductModule {}
