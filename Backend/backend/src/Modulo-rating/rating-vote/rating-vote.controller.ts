import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RatingVote } from './entities/rating-vote.entity';
import { RatingVoteService } from './rating-vote.service';
import { CreateRatingVoteDto } from './dto/create-rating-vote.dto';
import { UpdatedRatingVoteDto } from './dto/updated-rating-vote.dto';

@Controller('rating-vote')
export class RatingVoteController {
  constructor(private readonly ratingVoteService: RatingVoteService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<RatingVote[]> {
    return await this.ratingVoteService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaRatingVoteDto: CreateRatingVoteDto,
  ): Promise<RatingVote> {
    return await this.ratingVoteService.create(createaRatingVoteDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RatingVote> {
    return await this.ratingVoteService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedRatingVoteDto: UpdatedRatingVoteDto,
    @Param('id') id: string,
  ): Promise<RatingVote> {
    return await this.ratingVoteService.updated(+id, updatedRatingVoteDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.ratingVoteService.deleted(+id);
  }
}
