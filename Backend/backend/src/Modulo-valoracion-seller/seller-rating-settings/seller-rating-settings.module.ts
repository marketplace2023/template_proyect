import { Module } from '@nestjs/common';
import { SellerRatingSettingsController } from './seller-rating-settings.controller';
import { SellerRatingSettingsService } from './seller-rating-settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerRatingSettings } from './entities/seller-rating-settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerRatingSettings])],
  controllers: [SellerRatingSettingsController],
  providers: [SellerRatingSettingsService],
})
export class SellerRatingSettingsModule {}
