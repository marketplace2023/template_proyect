import { Module } from '@nestjs/common';
import { SellerRatingsController } from './seller-ratings.controller';
import { SellerRatingsService } from './seller-ratings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerRating } from './entities/seller-ratings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerRating])],
  controllers: [SellerRatingsController],
  providers: [SellerRatingsService],
})
export class SellerRatingsModule {}
