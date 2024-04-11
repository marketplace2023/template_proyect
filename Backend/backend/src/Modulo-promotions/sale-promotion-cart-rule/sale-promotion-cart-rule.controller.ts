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
import { SalePromotionCartRuleService } from './sale-promotion-cart-rule.service';
import { SalePromotionCartRule } from './entities/sale-promotion-cart-rule.entity';
import { CreateSalePromotionCartRuleDto } from './dto/created-sale-promotion-cart-rule.dto';
import { UpdatedSalePromotionCartRuleDto } from './dto/updated-sale-promotion-cart-rule.dto';
@Controller('sale-promotion-cart-rule')
export class SalePromotionCartRuleController {
  constructor(
    private readonly salePromotionCartRuleService: SalePromotionCartRuleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionCartRule[]> {
    return await this.salePromotionCartRuleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionCartRuleDto: CreateSalePromotionCartRuleDto,
  ): Promise<SalePromotionCartRule> {
    return await this.salePromotionCartRuleService.create(
      createaSalePromotionCartRuleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionCartRule> {
    return await this.salePromotionCartRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionCartRuleDto: UpdatedSalePromotionCartRuleDto,
    @Param('id') id: string,
  ): Promise<SalePromotionCartRule> {
    return await this.salePromotionCartRuleService.updated(
      +id,
      updatedSalePromotionCartRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionCartRuleService.deleted(+id);
  }
}
