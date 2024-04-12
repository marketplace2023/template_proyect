import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockQuantService } from './stock_quant.service';
import { CreateStockQuantDto } from './dto/create-stock_quant.dto';
import { UpdateStockQuantDto } from './dto/update-stock_quant.dto';

@Controller('stock-quant')
export class StockQuantController {
  constructor(private readonly stockQuantService: StockQuantService) {}

  @Post()
  create(@Body() createStockQuantDto: CreateStockQuantDto) {
    return this.stockQuantService.create(createStockQuantDto);
  }

  @Get()
  findAll() {
    return this.stockQuantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockQuantService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockQuantDto: UpdateStockQuantDto,
  ) {
    return this.stockQuantService.update(+id, updateStockQuantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockQuantService.remove(+id);
  }
}
//informe-inventario-categoria                         # (product.template, stock.quant, product.category)
//# Genera un informe del inventario de productos por categoría en el sistema.
