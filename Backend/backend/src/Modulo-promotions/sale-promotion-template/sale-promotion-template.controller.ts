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
import { SalePromotionTemplateService } from './sale-promotion-template.service';
import { SalePromotionTemplate } from './entities/sale-promotion-template.entity';
import { CreateSalePromotiontemplateDto } from './dto/created-sale-promotion-template.dto';
import { UpdatedSalePromotiontemplateDto } from './dto/updated-sale-promotion-template.dto';
@Controller('sale-promotion-template')
export class SalePromotionTemplateController {
  constructor(
    private readonly salePromotionTemplateService: SalePromotionTemplateService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionTemplate[]> {
    return await this.salePromotionTemplateService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionTemplateDto: CreateSalePromotiontemplateDto,
  ): Promise<SalePromotionTemplate> {
    return await this.salePromotionTemplateService.create(
      createaSalePromotionTemplateDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionTemplate> {
    return await this.salePromotionTemplateService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionTemplateDto: UpdatedSalePromotiontemplateDto,
    @Param('id') id: string,
  ): Promise<SalePromotionTemplate> {
    return await this.salePromotionTemplateService.updated(
      +id,
      updatedSalePromotionTemplateDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionTemplateService.deleted(+id);
  }
}
