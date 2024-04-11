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
import { ProductsCategory } from './entities/products-category.entity';
import { UpdatedProductsCategoryDto } from './dto/updated-products-category.dto';
import { CreateProductsCategoryDto } from './dto/create-products-category.dto';
import { ProductsCategoryService } from './products-category.service';
@Controller('products-category')
export class ProductsCategoryController {
  constructor(
    private readonly productsCategoryService: ProductsCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductsCategory[]> {
    return await this.productsCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsCategoryDto: CreateProductsCategoryDto,
  ): Promise<ProductsCategory> {
    return await this.productsCategoryService.create(
      createaProductsCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsCategory> {
    return await this.productsCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsCategoryDto: UpdatedProductsCategoryDto,
    @Param('id') id: string,
  ): Promise<ProductsCategory> {
    return await this.productsCategoryService.updated(
      +id,
      updatedProductsCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsCategoryService.deleted(+id);
  }
}
