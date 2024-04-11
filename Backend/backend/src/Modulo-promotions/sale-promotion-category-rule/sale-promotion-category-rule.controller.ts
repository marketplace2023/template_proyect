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
import { SalePromotionCategoryRuleService } from './sale-promotion-category-rule.service';
import { SalePromotionCategoryRule } from './entities/sale-promotion-category-rule.entity';
import { CreateSalePromotionCategoryRuleDto } from './dto/created-sale-promotion-category-rule.dto';
import { UpdatedSalePromotionCategoryRuleDto } from './dto/updated-sale-promotion-category-rule.dto';
@Controller('sale-promotion-category-rule')
export class SalePromotionCategoryRuleController {
  constructor(
    private readonly salePromotionCategoryRuleService: SalePromotionCategoryRuleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionCategoryRule[]> {
    return await this.salePromotionCategoryRuleService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionCategoryRuleDto: CreateSalePromotionCategoryRuleDto,
  ): Promise<SalePromotionCategoryRule> {
    return await this.salePromotionCategoryRuleService.create(
      createaSalePromotionCategoryRuleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionCategoryRule> {
    return await this.salePromotionCategoryRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionCategoryRuleDto: UpdatedSalePromotionCategoryRuleDto,
    @Param('id') id: string,
  ): Promise<SalePromotionCategoryRule> {
    return await this.salePromotionCategoryRuleService.updated(
      +id,
      updatedSalePromotionCategoryRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionCategoryRuleService.deleted(+id);
  }
}
