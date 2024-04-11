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
import { ProductPackagingService } from './product-packaging.service';
import { ProductPackaging } from './entities/product-packaging.entity';
import { CreateProductPackagingDto } from './dto/created-product-packaging.dto';
import { UpdatedProductPackagingDto } from './dto/updated-product-packaging.dto';
@Controller('product-packaging')
export class ProductPackagingController {
  constructor(
    private readonly productPackagingService: ProductPackagingService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductPackaging[]> {
    return await this.productPackagingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductPackagingDto: CreateProductPackagingDto,
  ): Promise<ProductPackaging> {
    return await this.productPackagingService.create(
      createaProductPackagingDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductPackaging> {
    return await this.productPackagingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductPackagingDto: UpdatedProductPackagingDto,
    @Param('id') id: string,
  ): Promise<ProductPackaging> {
    return await this.productPackagingService.updated(
      +id,
      updatedProductPackagingDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productPackagingService.deleted(+id);
  }
}
