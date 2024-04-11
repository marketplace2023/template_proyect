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
import { StockShipmentWeightService } from './stock-shipment-weight.service';
import { StockShipmentWeight } from './entities/stock-shipment-weight.entity';
import { CreateStockShipmentWeightDto } from './dto/created-stock-shipment-weight.dto';
import { UpdatedStockShipmentWeightDto } from './dto/updated-stock-shipment-weight.dto';

@Controller('stock-shipment-weight')
export class StockShipmentWeightController {
  constructor(
    private readonly stockShipmentWeightService: StockShipmentWeightService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockShipmentWeight[]> {
    return await this.stockShipmentWeightService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockShipmentWeightDto: CreateStockShipmentWeightDto,
  ): Promise<StockShipmentWeight> {
    return await this.stockShipmentWeightService.create(
      createaStockShipmentWeightDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockShipmentWeight> {
    return await this.stockShipmentWeightService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockShipmentWeightDto: UpdatedStockShipmentWeightDto,
    @Param('id') id: string,
  ): Promise<StockShipmentWeight> {
    return await this.stockShipmentWeightService.updated(
      +id,
      updatedStockShipmentWeightDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockShipmentWeightService.deleted(+id);
  }
}
