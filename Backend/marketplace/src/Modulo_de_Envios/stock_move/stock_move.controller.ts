import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockMoveService } from './stock_move.service';
import { CreateStockMoveDto } from './dto/create-stock_move.dto';
import { UpdateStockMoveDto } from './dto/update-stock_move.dto';

@Controller('stock-move')
export class StockMoveController {
  constructor(private readonly stockMoveService: StockMoveService) {}

  @Post()
  create(@Body() createStockMoveDto: CreateStockMoveDto) {
    return this.stockMoveService.create(createStockMoveDto);
  }

  @Get()
  findAll() {
    return this.stockMoveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockMoveService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockMoveDto: UpdateStockMoveDto,
  ) {
    return this.stockMoveService.update(+id, updateStockMoveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockMoveService.remove(+id);
  }
}
//movimientos-productos                                                                # (stock.move)
//# Gestiona movimientos individuales de productos dentro de una operación de envío.

//registro-movimientos-entrada                                                   # (public.stock_move)
//# Registro de movimientos de entrada de productos en el almacén.

//registro-movimientos-salida                                                    # (public.stock_move)
//# Registro de movimientos de salida de productos del almacén.

//gestion-transferencias-internas                                                # (public.stock_move)
//# Gestión de transferencias internas de productos entre ubicaciones del almacén.

//configuracion-movimientos                                                     # (public.stock_move)
//# Configuración de movimientos de productos en el almacén.

//reporte-movimientos-inventario                                                # (public.stock_move)
//# Reporte de movimientos de inventario en el almacén.
