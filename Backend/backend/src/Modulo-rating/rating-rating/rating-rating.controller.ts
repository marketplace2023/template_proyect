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
import { RatingRating } from './entities/rating-rating.entity';
import { UpdatedRatingRatingDto } from './dto/updated-rating-rating.dto';
import { CreateRatingRatingDto } from './dto/create-rating-rating.dto';
import { RatingRatingService } from './rating-rating.service';

@Controller('rating-rating')
export class RatingRatingController {
  constructor(private readonly ratingRatingService: RatingRatingService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<RatingRating[]> {
    return await this.ratingRatingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaRatingRatingDto: CreateRatingRatingDto,
  ): Promise<RatingRating> {
    return await this.ratingRatingService.create(createaRatingRatingDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RatingRating> {
    return await this.ratingRatingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedRatingRatingDto: UpdatedRatingRatingDto,
    @Param('id') id: string,
  ): Promise<RatingRating> {
    return await this.ratingRatingService.updated(+id, updatedRatingRatingDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.ratingRatingService.deleted(+id);
  }
}
