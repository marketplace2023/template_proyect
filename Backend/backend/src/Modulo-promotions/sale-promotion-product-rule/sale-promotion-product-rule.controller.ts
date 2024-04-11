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
import { SalePromotionProductRule } from './entities/sale-promotion-product-rule.entity';
import { UpdatedSalePromotionProductRuleDto } from './dto/updated-sale-promotion-product-rule.dto';
import { CreateSalePromotionProductRuleDto } from './dto/created-sale-promotion-product-rule.dto';
import { SalePromotionProductRuleService } from './sale-promotion-product-rule.service';
@Controller('sale-promotion-product-rule')
export class SalePromotionProductRuleController {
  constructor(
    private readonly salePromotionProductRuleService: SalePromotionProductRuleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionProductRule[]> {
    return await this.salePromotionProductRuleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionProductRuleDto: CreateSalePromotionProductRuleDto,
  ): Promise<SalePromotionProductRule> {
    return await this.salePromotionProductRuleService.create(
      createaSalePromotionProductRuleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionProductRule> {
    return await this.salePromotionProductRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionProductRuleDto: UpdatedSalePromotionProductRuleDto,
    @Param('id') id: string,
  ): Promise<SalePromotionProductRule> {
    return await this.salePromotionProductRuleService.updated(
      +id,
      updatedSalePromotionProductRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionProductRuleService.deleted(+id);
  }
}
