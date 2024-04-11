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
import { ProductProduct } from './entities/product-product.entity';
import { ProductProductService } from './product-product.service';
import { CreateProductProductDto } from './dto/created-product-product.dto';
import { UpdatedProductProductDto } from './dto/updated-product-product.dto';
@Controller('product-product')
export class ProductProductController {
  constructor(private readonly productProductService: ProductProductService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductProduct[]> {
    return await this.productProductService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductProductDto: CreateProductProductDto,
  ): Promise<ProductProduct> {
    return await this.productProductService.create(createaProductProductDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductProduct> {
    return await this.productProductService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductProductDto: UpdatedProductProductDto,
    @Param('id') id: string,
  ): Promise<ProductProduct> {
    return await this.productProductService.updated(
      +id,
      updatedProductProductDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productProductService.deleted(+id);
  }
}
