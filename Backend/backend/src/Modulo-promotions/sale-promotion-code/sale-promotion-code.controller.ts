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
import { SalePromotionCode } from './entities/sale-promotion-code.entity';
import { UpdatedSalePromotionCodeDto } from './dto/updated-sale-promotion-code.dto';
import { CreateSalePromotionCodeDto } from './dto/created-sale-promotion-code.dto';
import { SalePromotionCodeService } from './sale-promotion-code.service';
@Controller('sale-promotion-code')
export class SalePromotionCodeController {
  constructor(
    private readonly salePromotionCodeService: SalePromotionCodeService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePromotionCode[]> {
    return await this.salePromotionCodeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePromotionCodeDto: CreateSalePromotionCodeDto,
  ): Promise<SalePromotionCode> {
    return await this.salePromotionCodeService.create(
      createaSalePromotionCodeDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SalePromotionCode> {
    return await this.salePromotionCodeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePromotionCodeDto: UpdatedSalePromotionCodeDto,
    @Param('id') id: string,
  ): Promise<SalePromotionCode> {
    return await this.salePromotionCodeService.updated(
      +id,
      updatedSalePromotionCodeDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.salePromotionCodeService.deleted(+id);
  }
}
