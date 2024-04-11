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
import { StockPicking } from './entities/stock-picking.entity';
import { StockPickingService } from './stock-picking.service';
import { CreateStockPickingDto } from './dto/created-stock-picking.dto';
import { UpdatedStockPickingDto } from './dto/updated-stock-picking.dto';
@Controller('stock-picking')
export class StockPickingController {
  constructor(private readonly stockPickingService: StockPickingService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPicking[]> {
    return await this.stockPickingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaStockPickingDto: CreateStockPickingDto,
  ): Promise<StockPicking> {
    return await this.stockPickingService.create(createaStockPickingDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPicking> {
    return await this.stockPickingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedStockPickingDto: UpdatedStockPickingDto,
    @Param('id') id: string,
  ): Promise<StockPicking> {
    return await this.stockPickingService.updated(+id, updatedStockPickingDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingService.deleted(+id);
  }
}
