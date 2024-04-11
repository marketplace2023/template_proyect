import { Module } from '@nestjs/common';
import { SalePromotionLineController } from './sale-promotion-line.controller';
import { SalePromotionLineService } from './sale-promotion-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionLine } from './entities/sale-promotion-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionLine])],
  controllers: [SalePromotionLineController],
  providers: [SalePromotionLineService],
})
export class SalePromotionLineModule {}
