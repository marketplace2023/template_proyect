import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderLineService } from './sale-order-line.service';
import { CreateSaleOrderLineDto } from './dto/create-sale-order-line.dto';
import { UpdateSaleOrderLineDto } from './dto/update-sale-order-line.dto';

@Controller('sale-order-line')
export class SaleOrderLineController {
  constructor(private readonly saleOrderLineService: SaleOrderLineService) {}

  @Post()
  create(@Body() createSaleOrderLineDto: CreateSaleOrderLineDto) {
    return this.saleOrderLineService.create(createSaleOrderLineDto);
  }

  @Get()
  findAll() {
    return this.saleOrderLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderLineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderLineDto: UpdateSaleOrderLineDto,
  ) {
    return this.saleOrderLineService.update(+id, updateSaleOrderLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderLineService.remove(+id);
  }
}
//resumen-productos-mas-comprados                # (sale.order.line)
//# Ofrece un resumen de los productos más comprados en el sistema basado en las órdenes de venta.

//informe-ventas-categoria-productos                   # (sale.order.line, product.template, product.category)
//# Genera un informe de las ventas realizadas por categoría de productos en el sistema.

//analisis-tendencias-compra-categoria                 # (sale.order.line, product.template, product.category)
//# Realiza un análisis de las tendencias de compra por categoría de productos.
