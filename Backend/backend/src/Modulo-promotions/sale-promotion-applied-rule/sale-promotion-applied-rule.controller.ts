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
import { SalePromotionAppliedRule } from './entities/sale-promotion-applied-rule.entity';
import { UpdatedSalePromotionAppliedRuleDto } from './dto/updated-sale-promotion-applied.dto';
import { CreateSalePromotionAppliedRuleDto } from './dto/created-sale-promotion-applied-rule.dto';
import { SalePromotionAppliedRuleService } from './sale-promotion-applied-rule.service';
@Controller('sale-promotion-applied-rule')
export class SalePromotionAppliedRuleController {
  constructor(
    private readonly salePromotionAppliedRuleService: SalePromotionAppliedRuleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionAppliedRule[]> {
    return await this.salePromotionAppliedRuleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionAppliedRuleDto: CreateSalePromotionAppliedRuleDto,
  ): Promise<SalePromotionAppliedRule> {
    return await this.salePromotionAppliedRuleService.create(
      createaSalePromotionAppliedRuleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionAppliedRule> {
    return await this.salePromotionAppliedRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionAppliedRuleDto: UpdatedSalePromotionAppliedRuleDto,
    @Param('id') id: string,
  ): Promise<SalePromotionAppliedRule> {
    return await this.salePromotionAppliedRuleService.updated(
      +id,
      updatedSalePromotionAppliedRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionAppliedRuleService.deleted(+id);
  }
}
