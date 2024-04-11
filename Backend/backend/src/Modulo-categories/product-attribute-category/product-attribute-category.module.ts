import { Module } from '@nestjs/common';
import { ProductAttributeCategoryController } from './product-attribute-category.controller';
import { ProductAttributeCategoryService } from './product-attribute-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAttributeCategory } from './entities/product-attribute-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAttributeCategory])],
  controllers: [ProductAttributeCategoryController],
  providers: [ProductAttributeCategoryService],
})
export class ProductAttributeCategoryModule {}
