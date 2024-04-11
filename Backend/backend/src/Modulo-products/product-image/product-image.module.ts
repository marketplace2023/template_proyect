import { Module } from '@nestjs/common';
import { ProductImageController } from './product-image.controller';
import { ProductImageService } from './product-image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage } from './entities/product-image.entity';
import { ProductsTemplate } from '../products-template/entities/products-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage, ProductsTemplate])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule {}
