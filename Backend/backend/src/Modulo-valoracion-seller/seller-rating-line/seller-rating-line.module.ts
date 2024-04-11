import { Module } from '@nestjs/common';
import { SellerSellerRatingLineController } from './seller-rating-line.controller';
import { SellerRatingLineService } from './seller-rating-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerRatingLine } from './entities/seller-rating-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerRatingLine])],
  controllers: [SellerSellerRatingLineController],
  providers: [SellerRatingLineService],
})
export class SellerRatingLineModule {}
