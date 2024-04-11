import { Module } from '@nestjs/common';
import { ProductPublicCategoryController } from './product-public-category.controller';
import { ProductPublicCategoryService } from './product-public-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPublicCategory } from './entities/product-category-public.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPublicCategory])],
  controllers: [ProductPublicCategoryController],
  providers: [ProductPublicCategoryService],
})
export class ProductPublicCategoryModule {}
