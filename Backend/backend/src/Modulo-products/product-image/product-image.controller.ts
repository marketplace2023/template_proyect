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
import { ProductImageService } from './product-image.service';
import { ProductImage } from './entities/product-image.entity';
import { UpdatedProductImageDto } from './dto/updated-product-image.dto';
import { CreateProductImageDto } from './dto/created-product-image.dto';
@Controller('product-image')
export class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductImage[]> {
    return await this.productImageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductImageDto: CreateProductImageDto,
  ): Promise<ProductImage> {
    return await this.productImageService.create(createaProductImageDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductImage> {
    return await this.productImageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductImageDto: UpdatedProductImageDto,
    @Param('id') id: string,
  ): Promise<ProductImage> {
    return await this.productImageService.updated(+id, updatedProductImageDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productImageService.deleted(+id);
  }
}
