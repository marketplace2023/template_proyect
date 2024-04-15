import { Module } from '@nestjs/common';
import { SellerCategoryService } from './seller_category.service';
import { SellerCategoryController } from './seller_category.controller';

@Module({
  controllers: [SellerCategoryController],
  providers: [SellerCategoryService],
})
export class SellerCategoryModule {}
