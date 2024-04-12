import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderService } from './sale_order.service';
import { CreateSaleOrderDto } from './dto/create-sale_order.dto';
import { UpdateSaleOrderDto } from './dto/update-sale_order.dto';

@Controller('sale-order')
export class SaleOrderController {
  constructor(private readonly saleOrderService: SaleOrderService) {}

  @Post()
  create(@Body() createSaleOrderDto: CreateSaleOrderDto) {
    return this.saleOrderService.create(createSaleOrderDto);
  }

  @Get()
  findAll() {
    return this.saleOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderDto: UpdateSaleOrderDto,
  ) {
    return this.saleOrderService.update(+id, updateSaleOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderService.remove(+id);
  }
}
//creacion-ordenes-venta                          # (sale.order)
//# Permite la creación de nuevas órdenes de venta en el sistema.

//gestion-estado-ordenes                          # (sale.order)
//# Administra el estado de las órdenes de venta, como pendientes, confirmadas, entregadas, etc.
