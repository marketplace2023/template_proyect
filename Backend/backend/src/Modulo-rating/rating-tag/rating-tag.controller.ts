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
import { RatingTagService } from './rating-tag.service';
import { RatingTag } from './entities/rating-tag.entity';
import { CreateRatingTagDto } from './dto/created-rating-tag.dto';
import { UpdatedRatingTagDto } from './dto/updated-rating-tag.dto';
@Controller('rating-tag')
export class RatingTagController {
  constructor(private readonly ratingTagService: RatingTagService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<RatingTag[]> {
    return await this.ratingTagService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaRatingTagDto: CreateRatingTagDto,
  ): Promise<RatingTag> {
    return await this.ratingTagService.create(createaRatingTagDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RatingTag> {
    return await this.ratingTagService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedRatingTagDto: UpdatedRatingTagDto,
    @Param('id') id: string,
  ): Promise<RatingTag> {
    return await this.ratingTagService.updated(+id, updatedRatingTagDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.ratingTagService.deleted(+id);
  }
}
