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
import { StockShipmentReturnService } from './stock-shipment-return.service';
import { StockShipmentReturn } from './entities/stock-shipment-return.entity';
import { CreateStockShipmentReturnDto } from './dto/created-stock-shipment-return.dto';
import { UpdatedStockShipmentReturnDto } from './dto/updated-stock-shipment-return.dto';

@Controller('stock-shipment-return')
export class StockShipmentReturnController {
  constructor(
    private readonly stockShipmentReturnService: StockShipmentReturnService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockShipmentReturn[]> {
    return await this.stockShipmentReturnService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockShipmentReturnDto: CreateStockShipmentReturnDto,
  ): Promise<StockShipmentReturn> {
    return await this.stockShipmentReturnService.create(
      createaStockShipmentReturnDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockShipmentReturn> {
    return await this.stockShipmentReturnService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockShipmentReturnDto: UpdatedStockShipmentReturnDto,
    @Param('id') id: string,
  ): Promise<StockShipmentReturn> {
    return await this.stockShipmentReturnService.updated(
      +id,
      updatedStockShipmentReturnDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockShipmentReturnService.deleted(+id);
  }
}
