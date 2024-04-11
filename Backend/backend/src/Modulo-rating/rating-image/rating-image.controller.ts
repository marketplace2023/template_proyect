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
import { RatingImageService } from './rating-image.service';
import { RatingImage } from './entities/rating-image.entity';
import { CreateRatingImageDto } from './dto/created-rating-image.dto';
import { UpdatedRatingImageDto } from './dto/updated-rating-image.dto';
@Controller('rating-image')
export class RatingImageController {
  constructor(private readonly ratingImageService: RatingImageService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<RatingImage[]> {
    return await this.ratingImageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaRatingImageDto: CreateRatingImageDto,
  ): Promise<RatingImage> {
    return await this.ratingImageService.create(createaRatingImageDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RatingImage> {
    return await this.ratingImageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedRatingImageDto: UpdatedRatingImageDto,
    @Param('id') id: string,
  ): Promise<RatingImage> {
    return await this.ratingImageService.updated(+id, updatedRatingImageDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.ratingImageService.deleted(+id);
  }
}
