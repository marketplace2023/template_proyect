import { Module } from '@nestjs/common';
import { SaleRatingController } from './sale-rating.controller';
import { SaleRatingService } from './sale-rating.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleRating } from './entities/sale-rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleRating])],
  controllers: [SaleRatingController],
  providers: [SaleRatingService],
})
export class SaleRatingModule {}
