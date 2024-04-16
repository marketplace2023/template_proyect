import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockWarehouseOrderpointService } from './stock_warehouse_orderpoint.service';
import { CreateStockWarehouseOrderpointDto } from './dto/create-stock_warehouse_orderpoint.dto';
import { UpdateStockWarehouseOrderpointDto } from './dto/update-stock_warehouse_orderpoint.dto';

@Controller('stock-warehouse-orderpoint')
export class StockWarehouseOrderpointController {
  constructor(
    private readonly stockWarehouseOrderpointService: StockWarehouseOrderpointService,
  ) {}

  @Post()
  create(
    @Body()
    createStockWarehouseOrderpointDto: CreateStockWarehouseOrderpointDto,
  ) {
    return this.stockWarehouseOrderpointService.create(
      createStockWarehouseOrderpointDto,
    );
  }

  @Get()
  findAll() {
    return this.stockWarehouseOrderpointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockWarehouseOrderpointService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateStockWarehouseOrderpointDto: UpdateStockWarehouseOrderpointDto,
  ) {
    return this.stockWarehouseOrderpointService.update(
      +id,
      updateStockWarehouseOrderpointDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockWarehouseOrderpointService.remove(+id);
  }
}
//establecimiento-puntos-pedido                                  # (public.stock_warehouse_orderpoint)
//# Establecimiento de puntos de pedido para la gestión de inventario.

//monitorizacion-niveles-stock                                  # (public.stock_warehouse_orderpoint)
//# Monitorización de niveles de stock en el almacén.

//optimizacion-gestion-inventario                                # (public.stock_warehouse_orderpoint)
//# Optimización de la gestión de inventario a través de puntos de pedido.

//configuracion-puntos-pedido                                    # (public.stock_warehouse_orderpoint)
//# Configuración de puntos de pedido para la gestión de inventario.

//reporte-puntos-pedido                                          # (public.stock_warehouse_orderpoint)
//# Reporte de puntos de pedido para la gestión de inventario.
