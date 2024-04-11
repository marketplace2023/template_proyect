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
import { SaleWishService } from './sale-wish.service';
import { SaleWish } from './entities/sale-wish.entity';
import { CreateSaleWishDto } from './dto/created-sale-wish.dto';
import { UpdatedSaleWishDto } from './dto/updated-sale-wish.dto';
@Controller('sale-wish')
export class SaleWishController {
  constructor(private readonly saleWishService: SaleWishService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleWish[]> {
    return await this.saleWishService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleWishDto: CreateSaleWishDto,
  ): Promise<SaleWish> {
    return await this.saleWishService.create(createaSaleWishDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleWish> {
    return await this.saleWishService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleWishDto: UpdatedSaleWishDto,
    @Param('id') id: string,
  ): Promise<SaleWish> {
    return await this.saleWishService.updated(+id, updatedSaleWishDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleWishService.deleted(+id);
  }
}
