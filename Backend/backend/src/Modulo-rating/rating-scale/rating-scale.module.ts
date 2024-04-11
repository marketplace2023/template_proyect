import { Module } from '@nestjs/common';
import { RatingScaleController } from './rating-scale.controller';
import { RatingScaleService } from './rating-scale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingScale } from './entities/rating-scale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingScale])],
  controllers: [RatingScaleController],
  providers: [RatingScaleService],
})
export class RatingScaleModule {}
