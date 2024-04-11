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
import { SalePromotionLineService } from './sale-promotion-line.service';
import { SalePromotionLine } from './entities/sale-promotion-line.entity';
import { CreateSalePromotionLineDto } from './dto/create-sale-promotion-line.dto';
import { UpdatedSalePromotionLineDto } from './dto/updated-sale-promotion-line.dto';
@Controller('sale-promotion-line')
export class SalePromotionLineController {
  constructor(
    private readonly salePromotionLineService: SalePromotionLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionLine[]> {
    return await this.salePromotionLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionLineDto: CreateSalePromotionLineDto,
  ): Promise<SalePromotionLine> {
    return await this.salePromotionLineService.create(
      createaSalePromotionLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionLine> {
    return await this.salePromotionLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionLineDto: UpdatedSalePromotionLineDto,
    @Param('id') id: string,
  ): Promise<SalePromotionLine> {
    return await this.salePromotionLineService.updated(
      +id,
      updatedSalePromotionLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionLineService.deleted(+id);
  }
}
