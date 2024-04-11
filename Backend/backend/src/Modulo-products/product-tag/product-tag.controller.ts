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
import { ProductTag } from './entities/product-tag.entity';
import { CreateProductTagDto } from './dto/created-product-tag.dto';
import { UpdatedProductTagDto } from './dto/updated-product-tag.dto';
import { ProductTagService } from './product-tag.service';

@Controller('product-tag')
export class ProductTagController {
  constructor(private readonly productTagService: ProductTagService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductTag[]> {
    console.log('hola');
    return await this.productTagService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductTagDto: CreateProductTagDto,
  ): Promise<ProductTag> {
    return await this.productTagService.create(createaProductTagDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductTag> {
    return await this.productTagService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductTagDto: UpdatedProductTagDto,
    @Param('id') id: string,
  ): Promise<ProductTag> {
    return await this.productTagService.updated(+id, updatedProductTagDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productTagService.deleted(+id);
  }
}
