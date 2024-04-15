import { Module } from '@nestjs/common';
import { SellerProductService } from './seller_product.service';
import { SellerProductController } from './seller_product.controller';

@Module({
  controllers: [SellerProductController],
  providers: [SellerProductService],
})
export class SellerProductModule {}
