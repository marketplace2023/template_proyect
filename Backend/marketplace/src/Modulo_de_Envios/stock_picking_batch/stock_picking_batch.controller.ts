import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockPickingBatchService } from './stock_picking_batch.service';
import { CreateStockPickingBatchDto } from './dto/create-stock_picking_batch.dto';
import { UpdateStockPickingBatchDto } from './dto/update-stock_picking_batch.dto';

@Controller('stock-picking-batch')
export class StockPickingBatchController {
  constructor(
    private readonly stockPickingBatchService: StockPickingBatchService,
  ) {}

  @Post()
  create(@Body() createStockPickingBatchDto: CreateStockPickingBatchDto) {
    return this.stockPickingBatchService.create(createStockPickingBatchDto);
  }

  @Get()
  findAll() {
    return this.stockPickingBatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockPickingBatchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockPickingBatchDto: UpdateStockPickingBatchDto,
  ) {
    return this.stockPickingBatchService.update(
      +id,
      updateStockPickingBatchDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockPickingBatchService.remove(+id);
  }
}
//lotes-envios                                                                        # (stock.picking.batch)
//# Gestiona grupos de órdenes de envío para procesamiento eficiente.
