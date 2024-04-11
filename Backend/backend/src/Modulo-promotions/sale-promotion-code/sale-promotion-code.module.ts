import { Module } from '@nestjs/common';
import { SalePromotionCodeController } from './sale-promotion-code.controller';
import { SalePromotionCodeService } from './sale-promotion-code.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionCode } from './entities/sale-promotion-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionCode])],
  controllers: [SalePromotionCodeController],
  providers: [SalePromotionCodeService],
})
export class SalePromotionCodeModule {}
