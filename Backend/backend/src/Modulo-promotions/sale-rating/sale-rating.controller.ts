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
import { SaleRating } from './entities/sale-rating.entity';
import { UpdatedSaleRatingDto } from './dto/updated-sale-rating.dto';
import { CreateSaleRatingDto } from './dto/created-sale-rating.dto';
import { SaleRatingService } from './sale-rating.service';
@Controller('sale-rating')
export class SaleRatingController {
  constructor(private readonly saleRatingService: SaleRatingService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleRating[]> {
    return await this.saleRatingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleRatingDto: CreateSaleRatingDto,
  ): Promise<SaleRating> {
    return await this.saleRatingService.create(createaSaleRatingDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleRating> {
    return await this.saleRatingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleRatingDto: UpdatedSaleRatingDto,
    @Param('id') id: string,
  ): Promise<SaleRating> {
    return await this.saleRatingService.updated(+id, updatedSaleRatingDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleRatingService.deleted(+id);
  }
}
