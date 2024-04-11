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
import { ProductRibbon } from './entities/product-ribbon.entity';
import { ProductRibbonService } from './product-ribbon.service';
import { CreateProductRibbonDto } from './dto/created-product-ribbon.dto';
import { UpdatedProductRibbonDto } from './dto/updated-product-ribbon.dto';
@Controller('product-ribbon')
export class ProductRibbonController {
  constructor(private readonly productRibbonService: ProductRibbonService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductRibbon[]> {
    return await this.productRibbonService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductRibbonDto: CreateProductRibbonDto,
  ): Promise<ProductRibbon> {
    return await this.productRibbonService.create(createaProductRibbonDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductRibbon> {
    return await this.productRibbonService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductRibbonDto: UpdatedProductRibbonDto,
    @Param('id') id: string,
  ): Promise<ProductRibbon> {
    return await this.productRibbonService.updated(
      +id,
      updatedProductRibbonDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productRibbonService.deleted(+id);
  }
}
