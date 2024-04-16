import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockRuleService } from './stock_rule.service';
import { CreateStockRuleDto } from './dto/create-stock_rule.dto';
import { UpdateStockRuleDto } from './dto/update-stock_rule.dto';

@Controller('stock-rule')
export class StockRuleController {
  constructor(private readonly stockRuleService: StockRuleService) {}

  @Post()
  create(@Body() createStockRuleDto: CreateStockRuleDto) {
    return this.stockRuleService.create(createStockRuleDto);
  }

  @Get()
  findAll() {
    return this.stockRuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockRuleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockRuleDto: UpdateStockRuleDto,
  ) {
    return this.stockRuleService.update(+id, updateStockRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockRuleService.remove(+id);
  }
}
// definicion-reglas-abastecimiento                                              # (public.stock_rule)
//# Definición de reglas de abastecimiento para la gestión de inventario.

//automatizacion-flujos-inventario                                              # (public.stock_rule)
//# Automatización de flujos de inventario basados en reglas de abastecimiento.

//optimizacion-flujos-inventario                                                 # (public.stock_rule)
//# Optimización de flujos de inventario mediante reglas específicas.

//configuracion-reglas-abastecimiento                                            # (public.stock_rule)
//# Configuración de reglas de abastecimiento para la gestión de inventario.

//reporte-reglas-abastecimiento                                                  # (public.stock_rule)
//# Reporte de reglas de abastecimiento para la gestión de inventario.
