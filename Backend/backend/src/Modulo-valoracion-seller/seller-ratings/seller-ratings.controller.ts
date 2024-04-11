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
import { SellerRatingsService } from './seller-ratings.service';
import { SellerRating } from './entities/seller-ratings.entity';
import { CreateSellerRatingDto } from './dto/create-seller-rating.dto';
import { UpdatedSellerRatingDto } from './dto/updated_seller-ratings.dto';
@Controller('seller-rating')
export class SellerRatingsController {
  constructor(private readonly sellerRatingService: SellerRatingsService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SellerRating[]> {
    return await this.sellerRatingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSellerRatingDto: CreateSellerRatingDto,
  ): Promise<SellerRating> {
    return await this.sellerRatingService.create(createaSellerRatingDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SellerRating> {
    return await this.sellerRatingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSellerRatingDto: UpdatedSellerRatingDto,
    @Param('id') id: string,
  ): Promise<SellerRating> {
    return await this.sellerRatingService.updated(+id, updatedSellerRatingDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.sellerRatingService.deleted(+id);
  }
}
