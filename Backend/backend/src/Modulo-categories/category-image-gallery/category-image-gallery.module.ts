import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryImageGalleryService } from './category-image-gallery.service';
import { CategoryImageGalleryController } from './category-image-gallery.controller';
import { CategoryImageGallery } from './entities/category-image-gallery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryImageGallery])],
  controllers: [CategoryImageGalleryController],
  providers: [CategoryImageGalleryService],
})
export class CategoryImageGalleryModule {}
