import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockScrapService } from './stock_scrap.service';
import { CreateStockScrapDto } from './dto/create-stock_scrap.dto';
import { UpdateStockScrapDto } from './dto/update-stock_scrap.dto';

@Controller('stock-scrap')
export class StockScrapController {
  constructor(private readonly stockScrapService: StockScrapService) {}

  @Post()
  create(@Body() createStockScrapDto: CreateStockScrapDto) {
    return this.stockScrapService.create(createStockScrapDto);
  }

  @Get()
  findAll() {
    return this.stockScrapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockScrapService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockScrapDto: UpdateStockScrapDto,
  ) {
    return this.stockScrapService.update(+id, updateStockScrapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockScrapService.remove(+id);
  }
}
//registro-productos-desechados                                                # (public.stock_scrap)
//# Registro de productos desechados del inventario.

//gestion-documentacion-desechos                                                # (public.stock_scrap)
//# Gestión de documentación relacionada con productos desechados.

//actualizacion-inventario-perdido                                              # (public.stock_scrap)
//# Actualización del inventario por productos perdidos o desaparecidos.

//configuracion-productos-desechados                                           # (public.stock_scrap)
//# Configuración de productos desechados en el inventario.

//reporte-productos-desechados                                                  # (public.stock_scrap)
//# Reporte de productos desechados en el inventario.
