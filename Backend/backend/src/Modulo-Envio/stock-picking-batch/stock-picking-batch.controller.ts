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
import { CreateStockPickingBatchDto } from './dto/created-stock-picking-batch.dto';
import { StockPickingBatch } from './entities/stock-picking-batch.entity';
import { StockPickingBatchService } from './stock-picking-batch.service';
import { UpdatedStockPickingBatchDto } from './dto/updated-stock-picking-batch.dto';
@Controller('stock-picking-batch')
export class StockPickingBatchController {
  constructor(
    private readonly stockPickingBatchService: StockPickingBatchService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingBatch[]> {
    return await this.stockPickingBatchService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockPickingBatchDto: CreateStockPickingBatchDto,
  ): Promise<StockPickingBatch> {
    return await this.stockPickingBatchService.create(
      createaStockPickingBatchDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingBatch> {
    return await this.stockPickingBatchService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockPickingBatchDto: UpdatedStockPickingBatchDto,
    @Param('id') id: string,
  ): Promise<StockPickingBatch> {
    return await this.stockPickingBatchService.updated(
      +id,
      updatedStockPickingBatchDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingBatchService.deleted(+id);
  }
}
