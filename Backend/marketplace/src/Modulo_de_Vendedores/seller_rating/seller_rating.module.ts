import { Module } from '@nestjs/common';
import { SellerRatingService } from './seller_rating.service';
import { SellerRatingController } from './seller_rating.controller';

@Module({
  controllers: [SellerRatingController],
  providers: [SellerRatingService],
})
export class SellerRatingModule {}
