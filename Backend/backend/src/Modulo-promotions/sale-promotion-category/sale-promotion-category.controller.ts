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
import { SalePromotionCategory } from './entities/sale-promotion-category.entity';
import { SalePromotionCategoryService } from './sale-promotion-category.service';
import { CreateSalePromotionCategoryDto } from './dto/create-sale-promotion-category.dto';
import { UpdatedSalePromotionCategoryDto } from './dto/updated-sale-promotion-category.dto';
@Controller('sale-promotion-category')
export class SalePromotionCategoryController {
  constructor(
    private readonly salePromotionCategoryService: SalePromotionCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionCategory[]> {
    return await this.salePromotionCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionCategoryDto: CreateSalePromotionCategoryDto,
  ): Promise<SalePromotionCategory> {
    return await this.salePromotionCategoryService.create(
      createaSalePromotionCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionCategory> {
    return await this.salePromotionCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionCategoryDto: UpdatedSalePromotionCategoryDto,
    @Param('id') id: string,
  ): Promise<SalePromotionCategory> {
    return await this.salePromotionCategoryService.updated(
      +id,
      updatedSalePromotionCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionCategoryService.deleted(+id);
  }
}
