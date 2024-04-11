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
import { CreateSaleShopDto } from './dto/created-sale-shop.dto';
import { SaleShop } from './entities/sale-shop.entity';
import { UpdatedSaleShopDto } from './dto/updated-sale-shop.dto';
import { SaleShopService } from './sale-shop.service';
@Controller('sale-shop')
export class SaleShopController {
  constructor(private readonly saleShopService: SaleShopService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleShop[]> {
    return await this.saleShopService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleShopDto: CreateSaleShopDto,
  ): Promise<SaleShop> {
    return await this.saleShopService.create(createaSaleShopDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleShop> {
    return await this.saleShopService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleShopDto: UpdatedSaleShopDto,
    @Param('id') id: string,
  ): Promise<SaleShop> {
    return await this.saleShopService.updated(+id, updatedSaleShopDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleShopService.deleted(+id);
  }
}
