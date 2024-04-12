import { Module } from '@nestjs/common';
import { RatingRatingService } from './rating_rating.service';
import { RatingRatingController } from './rating_rating.controller';

@Module({
  controllers: [RatingRatingController],
  providers: [RatingRatingService],
})
export class RatingRatingModule {}
