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
import { SellerRatingLine } from './entities/seller-rating-line.entity';
import { SellerRatingLineService } from './seller-rating-line.service';
import { CreateSellerRatingLineDto } from './dto/create-seller-rating-line.dto';
import { UpdatedSellerRatingLineDto } from './dto/updated-seller-rating-line.dto';
@Controller('seller-rating-line')
export class SellerSellerRatingLineController {
  constructor(
    private readonly sellerRatingLineService: SellerRatingLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SellerRatingLine[]> {
    return await this.sellerRatingLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSellerRatingLineDto: CreateSellerRatingLineDto,
  ): Promise<SellerRatingLine> {
    return await this.sellerRatingLineService.create(
      createaSellerRatingLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SellerRatingLine> {
    return await this.sellerRatingLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSellerRatingLineDto: UpdatedSellerRatingLineDto,
    @Param('id') id: string,
  ): Promise<SellerRatingLine> {
    return await this.sellerRatingLineService.updated(
      +id,
      updatedSellerRatingLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.sellerRatingLineService.deleted(+id);
  }
}
