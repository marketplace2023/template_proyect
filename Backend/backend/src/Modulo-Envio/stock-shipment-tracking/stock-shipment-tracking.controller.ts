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
import { StockShipmentTrackingService } from './stock-shipment-tracking.service';
import { StockShipmentTracking } from './entities/stock-shipment-tracking.entity';
import { CreateStockShipmentTrackingDto } from './dto/created-stock-shipment-tracking.dto';
import { UpdatedStockShipmentTrackingDto } from './dto/updated-stock-shipment-tracking.dto';
@Controller('stock-shipment-tracking')
export class StockShipmentTrackingController {
  constructor(
    private readonly stockShipmentTrackingService: StockShipmentTrackingService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockShipmentTracking[]> {
    return await this.stockShipmentTrackingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockShipmentTrackingDto: CreateStockShipmentTrackingDto,
  ): Promise<StockShipmentTracking> {
    return await this.stockShipmentTrackingService.create(
      createaStockShipmentTrackingDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockShipmentTracking> {
    return await this.stockShipmentTrackingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockShipmentTrackingDto: UpdatedStockShipmentTrackingDto,
    @Param('id') id: string,
  ): Promise<StockShipmentTracking> {
    return await this.stockShipmentTrackingService.updated(
      +id,
      updatedStockShipmentTrackingDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockShipmentTrackingService.deleted(+id);
  }
}
