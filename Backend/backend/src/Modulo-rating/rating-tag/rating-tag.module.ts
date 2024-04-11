import { Module } from '@nestjs/common';
import { RatingTagController } from './rating-tag.controller';
import { RatingTagService } from './rating-tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingTag } from './entities/rating-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingTag])],
  controllers: [RatingTagController],
  providers: [RatingTagService],
})
export class RatingTagModule {}
