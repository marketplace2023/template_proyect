import { Module } from '@nestjs/common';
import { SalePromotionController } from './sale-promotion.controller';
import { SalePromotionService } from './sale-promotion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotion } from './entities/sale-promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotion])],
  controllers: [SalePromotionController],
  providers: [SalePromotionService],
})
export class SalePromotionModule {}
