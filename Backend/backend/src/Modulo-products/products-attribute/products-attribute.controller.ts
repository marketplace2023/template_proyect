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
import { ProductsAttribute } from './entities/products-attribute.entity';
import { ProductsAttributeService } from './products-attribute.service';
import { CreateProductsAttributeDto } from './dto/create-products-attribute.dto';
import { UpdatedProductsAttributeDto } from './dto/updated-products-attribute.dto';

@Controller('products-attribute')
export class ProductsAttributeController {
  constructor(
    private readonly productsAttributeService: ProductsAttributeService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductsAttribute[]> {
    return await this.productsAttributeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsAttributeDto: CreateProductsAttributeDto,
  ): Promise<ProductsAttribute> {
    return await this.productsAttributeService.create(
      createaProductsAttributeDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsAttribute> {
    return await this.productsAttributeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsAttributeDto: UpdatedProductsAttributeDto,
    @Param('id') id: string,
  ): Promise<ProductsAttribute> {
    return await this.productsAttributeService.updated(
      +id,
      updatedProductsAttributeDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsAttributeService.deleted(+id);
  }
}
