import { Module } from '@nestjs/common';
import { RatingVoteController } from './rating-vote.controller';
import { RatingVoteService } from './rating-vote.service';
import { RatingVote } from './entities/rating-vote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RatingVote])],
  controllers: [RatingVoteController],
  providers: [RatingVoteService],
})
export class RatingVoteModule {}
