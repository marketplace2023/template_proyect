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
import { StockStorageCategoryCapacityService } from './stock-storage-category-capacity.service';
import { StockStorageCategoryCapacity } from './entities/stock-storage-category-capacity.entity';
import { CreateStockStorageCategoryCapacityDto } from './dto/create-stock-storage-category-capacity.dto';
import { UpdatedStockStorageCategoryCapacityDto } from './dto/updated-storage-category-capacity.dto';

@Controller('stock-storage-category-capacity')
export class StockStorageCategoryCapacityController {
  constructor(
    private readonly stockStorageCategoryCapacityService: StockStorageCategoryCapacityService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockStorageCategoryCapacity[]> {
    return await this.stockStorageCategoryCapacityService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaStockStorageCategoryCapacityDto: CreateStockStorageCategoryCapacityDto,
  ): Promise<StockStorageCategoryCapacity> {
    return await this.stockStorageCategoryCapacityService.create(
      createaStockStorageCategoryCapacityDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<StockStorageCategoryCapacity> {
    return await this.stockStorageCategoryCapacityService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedStockStorageCategoryCapacityDto: UpdatedStockStorageCategoryCapacityDto,
    @Param('id') id: string,
  ): Promise<StockStorageCategoryCapacity> {
    return await this.stockStorageCategoryCapacityService.updated(
      +id,
      updatedStockStorageCategoryCapacityDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockStorageCategoryCapacityService.deleted(+id);
  }
}
