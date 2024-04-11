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
import { StockLocationService } from './stock-location.service';
import { StockLocation } from './entities/stock-location.entity';
import { CreateStockLocationDto } from './dto/created-stock-location.dto';
import { UpdatedStockLocationDto } from './dto/updated-stock-location.dto';
@Controller('stock-location')
export class StockLocationController {
  constructor(private readonly stockLocationService: StockLocationService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockLocation[]> {
    return await this.stockLocationService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockLocationDto: CreateStockLocationDto,
  ): Promise<StockLocation> {
    return await this.stockLocationService.create(createaStockLocationDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockLocation> {
    return await this.stockLocationService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockLocationDto: UpdatedStockLocationDto,
    @Param('id') id: string,
  ): Promise<StockLocation> {
    return await this.stockLocationService.updated(
      +id,
      updatedStockLocationDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockLocationService.deleted(+id);
  }
}
