import { Module } from '@nestjs/common';
import { SalePromotionTemplateController } from './sale-promotion-template.controller';
import { SalePromotionTemplateService } from './sale-promotion-template.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePromotionTemplate } from './entities/sale-promotion-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePromotionTemplate])],
  controllers: [SalePromotionTemplateController],
  providers: [SalePromotionTemplateService],
})
export class SalePromotionTemplateModule {}
