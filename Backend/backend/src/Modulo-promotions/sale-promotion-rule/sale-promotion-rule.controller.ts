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
import { SalePromotionRule } from './entities/sale-promotion-rule.entity';
import { CreateSalePromotionRuleDto } from './dto/create-sale-promotion-rule.dto';
import { SalePromotionRuleService } from './sale-promotion-rule.service';
import { UpdatedSalePromotionRuleDto } from './dto/updated-sale-promotion-rule.dto';
@Controller('sale-promotion-rule')
export class SalePromotionRuleController {
  constructor(
    private readonly salePromotionRuleService: SalePromotionRuleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionRule[]> {
    return await this.salePromotionRuleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionRuleDto: CreateSalePromotionRuleDto,
  ): Promise<SalePromotionRule> {
    return await this.salePromotionRuleService.create(
      createaSalePromotionRuleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionRule> {
    return await this.salePromotionRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionRuleDto: UpdatedSalePromotionRuleDto,
    @Param('id') id: string,
  ): Promise<SalePromotionRule> {
    return await this.salePromotionRuleService.updated(
      +id,
      updatedSalePromotionRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionRuleService.deleted(+id);
  }
}
