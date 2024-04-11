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
import { SaleOrderCategoryService } from './sale-order-category.service';
import { CreatedSaleOrderCategoryDto } from './dto/created-sale-order-category-dto';
import { SaleOrderCategory } from './entities/sale-order-category.entity';
import { UpdatedSaleOrderCategoryDto } from './dto/updated-sale-order-category.dto';
@Controller('sale-order-category')
export class SaleOrderCategoryController {
  constructor(
    private readonly saleOrderCategoryService: SaleOrderCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleOrderCategory[]> {
    return await this.saleOrderCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadSaleOrderCategoryDto: CreatedSaleOrderCategoryDto,
  ): Promise<SaleOrderCategory> {
    return await this.saleOrderCategoryService.create(
      createadSaleOrderCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleOrderCategory> {
    return await this.saleOrderCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedSaleOrderCategoryDto: UpdatedSaleOrderCategoryDto,
    @Param('id') id: string,
  ): Promise<SaleOrderCategory> {
    return await this.saleOrderCategoryService.updated(
      +id,
      updatedSaleOrderCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleOrderCategoryService.deleted(+id);
  }
}
