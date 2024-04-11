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
import { ProductCategoryImageService } from './product-category-image.service';
import { ProductCategoryImage } from './entities/product-category-image.entity';
import { CreatedProductCategoryImageDto } from './dto/created-product-category-image.dto';
import { UpdatedProductCategoryImageDto } from './dto/updated-product-category-image.dto';
@Controller('product-category-image')
export class ProductCategoryImageController {
  constructor(
    private readonly productCategoryImageService: ProductCategoryImageService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductCategoryImage[]> {
    return await this.productCategoryImageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadProductCategoryImageDto: CreatedProductCategoryImageDto,
  ): Promise<ProductCategoryImage> {
    return await this.productCategoryImageService.create(
      createadProductCategoryImageDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductCategoryImage> {
    return await this.productCategoryImageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductCategoryImageDto: UpdatedProductCategoryImageDto,
    @Param('id') id: string,
  ): Promise<ProductCategoryImage> {
    return await this.productCategoryImageService.updated(
      +id,
      updatedProductCategoryImageDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productCategoryImageService.deleted(+id);
  }
}
