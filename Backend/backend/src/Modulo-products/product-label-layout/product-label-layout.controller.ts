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
import { ProductLabelLayoutService } from './product-label-layout.service';
import { ProductLabelLayout } from './entities/product-label-layout.entity';
import { CreateProductLabelLayoutDto } from './dto/created-product-label-layout.dto';
import { UpdatedProductLabelLayoutDto } from './dto/updated-product-label-layout.dto';
@Controller('product-label-layout')
export class ProductLabelLayoutController {
  constructor(
    private readonly productLabelLayoutService: ProductLabelLayoutService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductLabelLayout[]> {
    return await this.productLabelLayoutService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductLabelLayoutDto: CreateProductLabelLayoutDto,
  ): Promise<ProductLabelLayout> {
    return await this.productLabelLayoutService.create(
      createaProductLabelLayoutDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductLabelLayout> {
    return await this.productLabelLayoutService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductLabelLayoutDto: UpdatedProductLabelLayoutDto,
    @Param('id') id: string,
  ): Promise<ProductLabelLayout> {
    return await this.productLabelLayoutService.updated(
      +id,
      updatedProductLabelLayoutDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productLabelLayoutService.deleted(+id);
  }
}
