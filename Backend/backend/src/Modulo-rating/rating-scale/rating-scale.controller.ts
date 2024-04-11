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
import { RatingScaleService } from './rating-scale.service';
import { RatingScale } from './entities/rating-scale.entity';
import { CreateRatingScaleDto } from './dto/create-rating-scale.dto';
import { UpdatedRatingScaleDto } from './dto/updated-rating-scale.dto';
@Controller('rating-scale')
export class RatingScaleController {
  constructor(private readonly ratingScaleService: RatingScaleService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<RatingScale[]> {
    return await this.ratingScaleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaRatingScaleDto: CreateRatingScaleDto,
  ): Promise<RatingScale> {
    return await this.ratingScaleService.create(createaRatingScaleDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RatingScale> {
    return await this.ratingScaleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedRatingScaleDto: UpdatedRatingScaleDto,
    @Param('id') id: string,
  ): Promise<RatingScale> {
    return await this.ratingScaleService.updated(+id, updatedRatingScaleDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.ratingScaleService.deleted(+id);
  }
}
