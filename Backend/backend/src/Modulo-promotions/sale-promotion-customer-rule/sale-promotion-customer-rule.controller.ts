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
import { SalePromotionCustomerRuleService } from './sale-promotion-customer-rule.service';
import { SalePromotionCustomerRule } from './entities/sale-promotion-customer-rule.entity';
import { CreateSalePromotionCustomerRuleDto } from './dto/created-sale-promotion-customer-rule.dto';
import { UpdatedSalePromotionCustomerRuleDto } from './dto/deleted-sale-promotion-customer-rule.dto';
@Controller('sale-promotion-customer-rule')
export class SalePromotionCustomerRuleController {
  constructor(
    private readonly salePromotionCustomerRuleService: SalePromotionCustomerRuleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionCustomerRule[]> {
    return await this.salePromotionCustomerRuleService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionCustomerRuleDto: CreateSalePromotionCustomerRuleDto,
  ): Promise<SalePromotionCustomerRule> {
    return await this.salePromotionCustomerRuleService.create(
      createaSalePromotionCustomerRuleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionCustomerRule> {
    return await this.salePromotionCustomerRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionCustomerRuleDto: UpdatedSalePromotionCustomerRuleDto,
    @Param('id') id: string,
  ): Promise<SalePromotionCustomerRule> {
    return await this.salePromotionCustomerRuleService.updated(
      +id,
      updatedSalePromotionCustomerRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionCustomerRuleService.deleted(+id);
  }
}
