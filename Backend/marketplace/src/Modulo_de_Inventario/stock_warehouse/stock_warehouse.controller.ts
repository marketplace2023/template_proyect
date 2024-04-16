import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockWarehouseService } from './stock_warehouse.service';
import { CreateStockWarehouseDto } from './dto/create-stock_warehouse.dto';
import { UpdateStockWarehouseDto } from './dto/update-stock_warehouse.dto';

@Controller('stock-warehouse')
export class StockWarehouseController {
  constructor(private readonly stockWarehouseService: StockWarehouseService) {}

  @Post()
  create(@Body() createStockWarehouseDto: CreateStockWarehouseDto) {
    return this.stockWarehouseService.create(createStockWarehouseDto);
  }

  @Get()
  findAll() {
    return this.stockWarehouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockWarehouseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockWarehouseDto: UpdateStockWarehouseDto,
  ) {
    return this.stockWarehouseService.update(+id, updateStockWarehouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockWarehouseService.remove(+id);
  }
}
//creacion-almacenes                                                        # (public.stock_warehouse)
//# Proceso para crear almacenes.

//definicion-zonas-rutas-almacenes                                          # (public.stock_warehouse)
//# Definición de zonas y rutas en los almacenes.

//asignacion-usuarios-roles-almacenes                                       # (public.stock_warehouse)
//# Asignación de usuarios y roles a los almacenes.

//configuracion-almacenes                                                   # (public.stock_warehouse)
//# Configuración de almacenes y sus atributos.

//reporte-almacenes                                                         # (public.stock_warehouse)
//# Reporte de almacenes y sus atributos.
