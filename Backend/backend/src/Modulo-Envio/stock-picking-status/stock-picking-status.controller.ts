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
import { StockPickingStatusService } from './stock-picking-status.service';
import { StockPickingStatus } from './entities/stock-picking-status.entity';
import { CreateStockPickingStatusDto } from './dto/created-stock-picking-status.dto';
import { UpdatedStockPickingStatusDto } from './dto/updated-stock-picking-status.dto';
@Controller('stock-picking-status')
export class StockPickingStatusController {
  constructor(
    private readonly stockPickingStatusService: StockPickingStatusService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingStatus[]> {
    return await this.stockPickingStatusService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockPickingStatusDto: CreateStockPickingStatusDto,
  ): Promise<StockPickingStatus> {
    return await this.stockPickingStatusService.create(
      createaStockPickingStatusDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingStatus> {
    return await this.stockPickingStatusService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedStockPickingStatusDto: UpdatedStockPickingStatusDto,
    @Param('id') id: string,
  ): Promise<StockPickingStatus> {
    return await this.stockPickingStatusService.updated(
      +id,
      updatedStockPickingStatusDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingStatusService.deleted(+id);
  }
}
