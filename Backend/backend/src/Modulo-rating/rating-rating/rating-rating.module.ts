import { Module } from '@nestjs/common';
import { RatingRatingController } from './rating-rating.controller';
import { RatingRatingService } from './rating-rating.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingRating } from './entities/rating-rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingRating])],
  controllers: [RatingRatingController],
  providers: [RatingRatingService],
})
export class RatingRatingModule {}
