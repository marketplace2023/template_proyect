import { Module } from '@nestjs/common';
import { RatingImageController } from './rating-image.controller';
import { RatingImageService } from './rating-image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingImage } from './entities/rating-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingImage])],
  controllers: [RatingImageController],
  providers: [RatingImageService],
})
export class RatingImageModule {}
