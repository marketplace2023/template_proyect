import { Module } from '@nestjs/common';
import { RatingLineController } from './rating-line.controller';
import { RatingLineService } from './rating-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingLine } from './entities/rating-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingLine])],
  controllers: [RatingLineController],
  providers: [RatingLineService],
})
export class RatingLineModule {}
