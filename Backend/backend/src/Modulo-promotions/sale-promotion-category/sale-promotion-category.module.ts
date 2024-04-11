import { Module } from '@nestjs/common';
import { SalePromotionCategoryController } from './sale-promotion-category.controller';
import { SalePromotionCategoryService } from './sale-promotion-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionCategory } from './entities/sale-promotion-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionCategory])],
  controllers: [SalePromotionCategoryController],
  providers: [SalePromotionCategoryService],
})
export class SalePromotionCategoryModule {}
