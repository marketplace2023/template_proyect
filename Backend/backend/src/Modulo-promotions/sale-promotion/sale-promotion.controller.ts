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
import { SalePromotionService } from './sale-promotion.service';
import { SalePromotion } from './entities/sale-promotion.entity';
import { CreateSalePromotionDto } from './dto/create-sale-promotion.dto';
import { UpdatedSalePromotionDto } from './dto/updated-sale-promotion.dto';
@Controller('sale-promotion')
export class SalePromotionController {
  constructor(private readonly salePromotionService: SalePromotionService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotion[]> {
    return await this.salePromotionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionDto: CreateSalePromotionDto,
  ): Promise<SalePromotion> {
    return await this.salePromotionService.create(createaSalePromotionDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotion> {
    return await this.salePromotionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionDto: UpdatedSalePromotionDto,
    @Param('id') id: string,
  ): Promise<SalePromotion> {
    return await this.salePromotionService.updated(
      +id,
      updatedSalePromotionDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionService.deleted(+id);
  }
}
