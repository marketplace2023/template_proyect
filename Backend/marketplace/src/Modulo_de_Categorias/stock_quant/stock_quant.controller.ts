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

//generacion-informes-ventas-ingresos-inventario            # (sale.report, account.move.line, stock.quant, etc.)
//# Procesa los datos para generar informes relacionados con ventas, ingresos e inventario.

//informe-inventario-productos                                  # (stock.quant)
//# Genera un informe del inventario de productos disponibles en el sistema.

//informe-inventario-productos                                  # (stock.quant)
//# Genera un informe del inventario de productos disponibles en el sistema.

//actualizacion-cantidad-disponible                                             # (public.stock_quant)
//# Actualización de la cantidad disponible de productos en el almacén.

//verificacion-disponibilidad-productos                                         # (public.stock_quant)
//# Verificación de la disponibilidad de productos en el almacén.

//ajustes-inventario                                                            # (public.stock_quant)
//# Ajustes en el inventario de productos en el almacén.

//configuracion-cantidad                                                       # (public.stock_quant)
//# Configuración de la cantidad de productos en el almacén.

//reporte-cantidad-disponible                                                  # (public.stock_quant)
//# Reporte de la cantidad disponible de productos en el almacén.
