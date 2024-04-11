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
import { CreatedStockStorageCategoryDto } from './dto/created-stock-storage-category.dto';
import { StockStorageCategory } from './entities/stock-storage-category.entity';
import { UpdatedStockStorageCategoryDto } from './dto/updated-stock-storage-category.dto';
import { StockStorageCategoryService } from './stock-storage-category.service';
@Controller('stock-storage-category')
export class StockStorageCategoryController {
  constructor(
    private readonly stockStorageCategoryService: StockStorageCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockStorageCategory[]> {
    return await this.stockStorageCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadStockStorageCategoryDto: CreatedStockStorageCategoryDto,
  ): Promise<StockStorageCategory> {
    return await this.stockStorageCategoryService.create(
      createadStockStorageCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockStorageCategory> {
    return await this.stockStorageCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockStorageCategoryDto: UpdatedStockStorageCategoryDto,
    @Param('id') id: string,
  ): Promise<StockStorageCategory> {
    return await this.stockStorageCategoryService.updated(
      +id,
      updatedStockStorageCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockStorageCategoryService.deleted(+id);
  }
}
