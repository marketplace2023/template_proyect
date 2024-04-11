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
import { ProductAttributeCategory } from './entities/product-attribute-category.entity';
import { UpdatedProductAttributeCategoryDto } from './dto/updated-product-attribute-category.dto';
import { CreatedProductAttributeCategoryDto } from './dto/created-product-attribute-category.dto';
import { ProductAttributeCategoryService } from './product-attribute-category.service';
@Controller('product-attribute-category')
export class ProductAttributeCategoryController {
  constructor(
    private readonly productAttributeCategoryService: ProductAttributeCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductAttributeCategory[]> {
    return await this.productAttributeCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createadProductAttributeCategoryDto: CreatedProductAttributeCategoryDto,
  ): Promise<ProductAttributeCategory> {
    return await this.productAttributeCategoryService.create(
      createadProductAttributeCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductAttributeCategory> {
    return await this.productAttributeCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedProductAttributeCategoryDto: UpdatedProductAttributeCategoryDto,
    @Param('id') id: string,
  ): Promise<ProductAttributeCategory> {
    return await this.productAttributeCategoryService.updated(
      +id,
      updatedProductAttributeCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productAttributeCategoryService.deleted(+id);
  }
}
