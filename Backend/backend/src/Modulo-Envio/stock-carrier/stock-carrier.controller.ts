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
import { StockCarrierService } from './stock-carrier.service';
import { StockCarrier } from './entities/stock-carrier.entity';
import { UpdatedStockCarrierDto } from './dto/updated-stock-carrier.dto';
import { CreateStockCarrierDto } from './dto/created-stock-carrier.dto';
@Controller('stock-carrier')
export class StockCarrierController {
  constructor(private readonly stockCarrierService: StockCarrierService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockCarrier[]> {
    return await this.stockCarrierService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockCarrierDto: CreateStockCarrierDto,
  ): Promise<StockCarrier> {
    return await this.stockCarrierService.create(createaStockCarrierDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockCarrier> {
    return await this.stockCarrierService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockCarrierDto: UpdatedStockCarrierDto,
    @Param('id') id: string,
  ): Promise<StockCarrier> {
    return await this.stockCarrierService.updated(+id, updatedStockCarrierDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockCarrierService.deleted(+id);
  }
}
