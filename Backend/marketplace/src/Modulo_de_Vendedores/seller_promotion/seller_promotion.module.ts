import { Module } from '@nestjs/common';
import { SellerPromotionService } from './seller_promotion.service';
import { SellerPromotionController } from './seller_promotion.controller';

@Module({
  controllers: [SellerPromotionController],
  providers: [SellerPromotionService],
})
export class SellerPromotionModule {}
