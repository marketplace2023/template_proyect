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
import { RatingLine } from './entities/rating-line.entity';
import { RatingLineService } from './rating-line.service';
import { CreateRatingLineDto } from './dto/create-rating-line.dto';
import { UpdatedRatingLineDto } from './dto/updated-rating-line.dto';

@Controller('rating-line')
export class RatingLineController {
  constructor(private readonly ratingLineService: RatingLineService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<RatingLine[]> {
    return await this.ratingLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaRatingLineDto: CreateRatingLineDto,
  ): Promise<RatingLine> {
    return await this.ratingLineService.create(createaRatingLineDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RatingLine> {
    return await this.ratingLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedRatingLineDto: UpdatedRatingLineDto,
    @Param('id') id: string,
  ): Promise<RatingLine> {
    return await this.ratingLineService.updated(+id, updatedRatingLineDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.ratingLineService.deleted(+id);
  }
}
