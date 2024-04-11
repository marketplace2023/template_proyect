import { Module } from '@nestjs/common';
import { ProductCategoryImageController } from './product-category-image.controller';
import { ProductCategoryImageService } from './product-category-image.service';
import { ProductCategoryImage } from './entities/product-category-image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategoryImage])],
  controllers: [ProductCategoryImageController],
  providers: [ProductCategoryImageService],
})
export class ProductCategoryImageModule {}
