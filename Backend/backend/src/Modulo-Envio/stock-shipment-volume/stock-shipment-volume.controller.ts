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
import { StockShipmentVolumeService } from './stock-shipment-volume.service';
import { StockShipmentVolume } from './entities/stock-shipment-volume.entity';
import { CreateStockShipmentVolumeDto } from './dto/created-stock-shipment-volume.dto';
import { UpdatedStockShipmentVolumeDto } from './dto/updated-stock-shipment-volume.dto';
@Controller('stock-shipment-volume')
export class StockShipmentVolumeController {
  constructor(
    private readonly stockShipmentVolumeService: StockShipmentVolumeService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockShipmentVolume[]> {
    return await this.stockShipmentVolumeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockShipmentVolumeDto: CreateStockShipmentVolumeDto,
  ): Promise<StockShipmentVolume> {
    return await this.stockShipmentVolumeService.create(
      createaStockShipmentVolumeDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockShipmentVolume> {
    return await this.stockShipmentVolumeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockShipmentVolumeDto: UpdatedStockShipmentVolumeDto,
    @Param('id') id: string,
  ): Promise<StockShipmentVolume> {
    return await this.stockShipmentVolumeService.updated(
      +id,
      updatedStockShipmentVolumeDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockShipmentVolumeService.deleted(+id);
  }
}
