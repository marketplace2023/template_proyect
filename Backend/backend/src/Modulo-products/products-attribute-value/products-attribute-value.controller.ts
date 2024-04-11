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
import { ProductsAttributeValue } from './entities/products-attribute-value.entity';
import { UpdatedProductsAttributeValueDto } from './dto/updated-products-attribute.dto';
import { CreateProductsAttributeValueDto } from './dto/create-products-attribute-value.dto';
import { ProductsAttributeValueService } from './products-attribute-value.service';
@Controller('products-attribute-value')
export class ProductsAttributeValueValueController {
  constructor(
    private readonly productsAttributeValueService: ProductsAttributeValueService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductsAttributeValue[]> {
    return await this.productsAttributeValueService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsAttributeValueDto: CreateProductsAttributeValueDto,
  ): Promise<ProductsAttributeValue> {
    return await this.productsAttributeValueService.create(
      createaProductsAttributeValueDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsAttributeValue> {
    return await this.productsAttributeValueService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsAttributeValueDto: UpdatedProductsAttributeValueDto,
    @Param('id') id: string,
  ): Promise<ProductsAttributeValue> {
    return await this.productsAttributeValueService.updated(
      +id,
      updatedProductsAttributeValueDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsAttributeValueService.deleted(+id);
  }
}
