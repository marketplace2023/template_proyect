import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockMoveLineService } from './stock_move_line.service';
import { CreateStockMoveLineDto } from './dto/create-stock_move_line.dto';
import { UpdateStockMoveLineDto } from './dto/update-stock_move_line.dto';

@Controller('stock-move-line')
export class StockMoveLineController {
  constructor(private readonly stockMoveLineService: StockMoveLineService) {}

  @Post()
  create(@Body() createStockMoveLineDto: CreateStockMoveLineDto) {
    return this.stockMoveLineService.create(createStockMoveLineDto);
  }

  @Get()
  findAll() {
    return this.stockMoveLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockMoveLineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockMoveLineDto: UpdateStockMoveLineDto,
  ) {
    return this.stockMoveLineService.update(+id, updateStockMoveLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockMoveLineService.remove(+id);
  }
}
//lineas-movimiento-stock                                                              # (stock.move.line)
//# Representa líneas de productos en movimientos de stock por envío.
