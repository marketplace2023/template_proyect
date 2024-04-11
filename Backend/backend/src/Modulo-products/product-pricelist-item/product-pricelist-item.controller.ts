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
import { ProductPricelistItemService } from './product-pricelist-item.service';
import { ProductPricelistItem } from './entities/product-pricelist-item.entity';
import { CreateProductPricelistItemDto } from './dto/created-product-pricelist-item.dto';
import { UpdatedProductPricelistItemDto } from './dto/updated-product-pricelist-item.dto';
@Controller('product-pricelist-item')
export class ProductPricelistItemController {
  constructor(
    private readonly productPricelistItemService: ProductPricelistItemService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductPricelistItem[]> {
    return await this.productPricelistItemService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductPricelistItemDto: CreateProductPricelistItemDto,
  ): Promise<ProductPricelistItem> {
    return await this.productPricelistItemService.create(
      createaProductPricelistItemDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductPricelistItem> {
    return await this.productPricelistItemService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductPricelistItemDto: UpdatedProductPricelistItemDto,
    @Param('id') id: string,
  ): Promise<ProductPricelistItem> {
    return await this.productPricelistItemService.updated(
      +id,
      updatedProductPricelistItemDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productPricelistItemService.deleted(+id);
  }
}
