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
import { Products } from './entities/products.entity';
import { UpdatedProductsDto } from './dto/updated-products.dto';
import { CreateProductsDto } from './dto/create-products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<Products[]> {
    return await this.productsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsDto: CreateProductsDto,
  ): Promise<Products> {
    return await this.productsService.create(createaProductsDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Products> {
    return await this.productsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsDto: UpdatedProductsDto,
    @Param('id') id: string,
  ): Promise<Products> {
    return await this.productsService.updated(+id, updatedProductsDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsService.deleted(+id);
  }
}
