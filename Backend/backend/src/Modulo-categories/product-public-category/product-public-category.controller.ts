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
import { ProductPublicCategory } from './entities/product-category-public.entity';
import { UpdatedProductsCategoryDto } from 'src/Modulo-products/products-category/dto/updated-products-category.dto';
import { CreateProductPublicCategoryDto } from './dto/create-product-public-category.dto';
import { ProductPublicCategoryService } from './product-public-category.service';
@Controller('product-public-category')
export class ProductPublicCategoryController {
  constructor(
    private readonly productPublicCategoryService: ProductPublicCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductPublicCategory[]> {
    return await this.productPublicCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductPublicCategoryDto: CreateProductPublicCategoryDto,
  ): Promise<ProductPublicCategory> {
    return await this.productPublicCategoryService.create(
      createaProductPublicCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductPublicCategory> {
    return await this.productPublicCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductPublicCategoryDto: UpdatedProductsCategoryDto,
    @Param('id') id: string,
  ): Promise<ProductPublicCategory> {
    return await this.productPublicCategoryService.updated(
      +id,
      updatedProductPublicCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productPublicCategoryService.deleted(+id);
  }
}
