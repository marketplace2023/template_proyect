import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockLocationService } from './stock_location.service';
import { CreateStockLocationDto } from './dto/create-stock_location.dto';
import { UpdateStockLocationDto } from './dto/update-stock_location.dto';

@Controller('stock-location')
export class StockLocationController {
  constructor(private readonly stockLocationService: StockLocationService) {}

  @Post()
  create(@Body() createStockLocationDto: CreateStockLocationDto) {
    return this.stockLocationService.create(createStockLocationDto);
  }

  @Get()
  findAll() {
    return this.stockLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockLocationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockLocationDto: UpdateStockLocationDto,
  ) {
    return this.stockLocationService.update(+id, updateStockLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockLocationService.remove(+id);
  }
}
//creacion-ubicaciones-fisicas                                               # (public.stock_location)
//# Proceso para crear ubicaciones físicas en el almacén.

//asignacion-productos-ubicaciones                                           # (public.stock_location)
//# Asignación de productos a ubicaciones específicas en el almacén.

//actualizacion-disponibilidad-ubicaciones                                   # (public.stock_location)
//# Proceso para actualizar la disponibilidad de productos en las ubicaciones del almacén.

//configuracion-ubicaciones                                                  # (public.stock_location)
//# Configuración de ubicaciones en el almacén.

//reporte-ubicaciones-fisicas                                                # (public.stock_location)
//# Reporte de ubicaciones físicas en el almacén.
