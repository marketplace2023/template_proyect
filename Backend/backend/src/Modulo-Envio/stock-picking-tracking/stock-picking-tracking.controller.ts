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
import { StockPickingTrackingService } from './stock-picking-tracking.service';
import { StockPickingTracking } from './entities/stock-picking-tracking.entity';
import { CreateStockPickingTrackingDto } from './dto/created-stock-picking-tracking.dto';
import { UpdatedStockPickingTrackingDto } from './dto/updated-stock-picking-tracking.dto';
@Controller('stock-picking-tracking')
export class StockPickingTrackingController {
  constructor(
    private readonly stockPickingTrackingService: StockPickingTrackingService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingTracking[]> {
    return await this.stockPickingTrackingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockPickingTrackingDto: CreateStockPickingTrackingDto,
  ): Promise<StockPickingTracking> {
    return await this.stockPickingTrackingService.create(
      createaStockPickingTrackingDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingTracking> {
    return await this.stockPickingTrackingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockPickingTrackingDto: UpdatedStockPickingTrackingDto,
    @Param('id') id: string,
  ): Promise<StockPickingTracking> {
    return await this.stockPickingTrackingService.updated(
      +id,
      updatedStockPickingTrackingDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingTrackingService.deleted(+id);
  }
}
