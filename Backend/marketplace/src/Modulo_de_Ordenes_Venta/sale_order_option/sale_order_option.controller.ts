import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderOptionService } from './sale_order_option.service';
import { CreateSaleOrderOptionDto } from './dto/create-sale_order_option.dto';
import { UpdateSaleOrderOptionDto } from './dto/update-sale_order_option.dto';

@Controller('sale-order-option')
export class SaleOrderOptionController {
  constructor(
    private readonly saleOrderOptionService: SaleOrderOptionService,
  ) {}

  @Post()
  create(@Body() createSaleOrderOptionDto: CreateSaleOrderOptionDto) {
    return this.saleOrderOptionService.create(createSaleOrderOptionDto);
  }

  @Get()
  findAll() {
    return this.saleOrderOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderOptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderOptionDto: UpdateSaleOrderOptionDto,
  ) {
    return this.saleOrderOptionService.update(+id, updateSaleOrderOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderOptionService.remove(+id);
  }
}
//gestion-opciones-adicionales                                            # (public.sale_order_option)
//# Gestión de opciones adicionales en las órdenes de venta.

//analisis-opciones-adicionales                                           # (public.sale_order_option)
//# Análisis de las opciones adicionales en las órdenes de venta.
