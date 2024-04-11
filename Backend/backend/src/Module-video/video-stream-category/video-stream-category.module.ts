import { Module } from '@nestjs/common';
import { VideoStreamCategoryController } from './video-stream-category.controller';
import { VideoStreamCategoryService } from './video-stream-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamCategory } from './entities/video-stream-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamCategory])],
  controllers: [VideoStreamCategoryController],
  providers: [VideoStreamCategoryService],
})
export class VideoStreamCategoryModule {}
