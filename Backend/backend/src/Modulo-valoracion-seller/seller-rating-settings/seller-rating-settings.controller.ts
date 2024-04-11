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
import { SellerRatingSettingsService } from './seller-rating-settings.service';
import { CreateSellerRatingSettingsDto } from './dto/create-seller-rating-settings.dto';
import { SellerRatingSettings } from './entities/seller-rating-settings.entity';
import { UpdatedSellerRatingSettingsDto } from './dto/updated-seller-rating-settings.dto';
@Controller('seller-rating-settings')
export class SellerRatingSettingsController {
  constructor(
    private readonly sellerRatingSettingsService: SellerRatingSettingsService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SellerRatingSettings[]> {
    return await this.sellerRatingSettingsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSellerRatingSettingsDto: CreateSellerRatingSettingsDto,
  ): Promise<SellerRatingSettings> {
    return await this.sellerRatingSettingsService.create(
      createaSellerRatingSettingsDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SellerRatingSettings> {
    return await this.sellerRatingSettingsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSellerRatingSettingsDto: UpdatedSellerRatingSettingsDto,
    @Param('id') id: string,
  ): Promise<SellerRatingSettings> {
    return await this.sellerRatingSettingsService.updated(
      +id,
      updatedSellerRatingSettingsDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.sellerRatingSettingsService.deleted(+id);
  }
}
