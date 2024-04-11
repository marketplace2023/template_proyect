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
import { ProductsPricelistService } from './products-pricelist.service';
import { ProductsPricelist } from './entities/products-pricelist.entity';
import { CreateProductsPricelistDto } from './dto/create-products-pricelist.dto';
import { UpdatedProductsPricelistDto } from './dto/updated-products-princelist.dto';

@Controller('products-pricelist')
export class ProductsPricelistController {
  constructor(
    private readonly productsPricelistService: ProductsPricelistService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductsPricelist[]> {
    return await this.productsPricelistService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsPricelistDto: CreateProductsPricelistDto,
  ): Promise<ProductsPricelist> {
    return await this.productsPricelistService.create(
      createaProductsPricelistDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsPricelist> {
    return await this.productsPricelistService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsPricelistDto: UpdatedProductsPricelistDto,
    @Param('id') id: string,
  ): Promise<ProductsPricelist> {
    return await this.productsPricelistService.updated(
      +id,
      updatedProductsPricelistDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsPricelistService.deleted(+id);
  }
}
