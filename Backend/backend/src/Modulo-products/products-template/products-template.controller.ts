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
import { ProductsTemplate } from './entities/products-template.entity';
import { ProductsTemplateService } from './products-template.service';
import { UpdatedProductsTemplateDto } from './dto/updated-products-template.dto';
import { CreateProductsTemplateDto } from './dto/create-products-template.dto';
@Controller('products-template')
export class ProductsTemplateController {
  constructor(
    private readonly productsTemplateService: ProductsTemplateService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductsTemplate[]> {
    return await this.productsTemplateService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsTemplateDto: CreateProductsTemplateDto,
  ): Promise<ProductsTemplate> {
    return await this.productsTemplateService.create(
      createaProductsTemplateDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsTemplate> {
    return await this.productsTemplateService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsTemplateDto: UpdatedProductsTemplateDto,
    @Param('id') id: string,
  ): Promise<ProductsTemplate> {
    return await this.productsTemplateService.updated(
      +id,
      updatedProductsTemplateDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsTemplateService.deleted(+id);
  }
}
