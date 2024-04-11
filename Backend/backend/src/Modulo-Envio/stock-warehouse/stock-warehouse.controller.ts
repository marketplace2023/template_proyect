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
import { StockWarehouseService } from './stock-warehouse.service';
import { StockWarehouse } from './entities/stock-warehouse.entity';
import { CreateStockWarehouseDto } from './dto/created-stock-warehouse.dto';
import { UpdatedStockWarehouseDto } from './dto/updated-stock-warehouse.dto';
@Controller('stock-warehouse')
export class StockWarehouseController {
  constructor(private readonly stockwarehouseService: StockWarehouseService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockWarehouse[]> {
    return await this.stockwarehouseService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockwarehouseDto: CreateStockWarehouseDto,
  ): Promise<StockWarehouse> {
    return await this.stockwarehouseService.create(createaStockwarehouseDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockWarehouse> {
    return await this.stockwarehouseService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockwarehouseDto: UpdatedStockWarehouseDto,
    @Param('id') id: string,
  ): Promise<StockWarehouse> {
    return await this.stockwarehouseService.updated(
      +id,
      updatedStockwarehouseDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockwarehouseService.deleted(+id);
  }
}
