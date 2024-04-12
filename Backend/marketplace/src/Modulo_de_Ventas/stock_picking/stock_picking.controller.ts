import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockPickingService } from './stock_picking.service';
import { CreateStockPickingDto } from './dto/create-stock_picking.dto';
import { UpdateStockPickingDto } from './dto/update-stock_picking.dto';

@Controller('stock-picking')
export class StockPickingController {
  constructor(private readonly stockPickingService: StockPickingService) {}

  @Post()
  create(@Body() createStockPickingDto: CreateStockPickingDto) {
    return this.stockPickingService.create(createStockPickingDto);
  }

  @Get()
  findAll() {
    return this.stockPickingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockPickingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockPickingDto: UpdateStockPickingDto) {
    return this.stockPickingService.update(+id, updateStockPickingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockPickingService.remove(+id);
  }
}
