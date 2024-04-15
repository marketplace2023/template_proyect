import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderCancelService } from './sale_order_cancel.service';
import { CreateSaleOrderCancelDto } from './dto/create-sale_order_cancel.dto';
import { UpdateSaleOrderCancelDto } from './dto/update-sale_order_cancel.dto';

@Controller('sale-order-cancel')
export class SaleOrderCancelController {
  constructor(
    private readonly saleOrderCancelService: SaleOrderCancelService,
  ) {}

  @Post()
  create(@Body() createSaleOrderCancelDto: CreateSaleOrderCancelDto) {
    return this.saleOrderCancelService.create(createSaleOrderCancelDto);
  }

  @Get()
  findAll() {
    return this.saleOrderCancelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderCancelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderCancelDto: UpdateSaleOrderCancelDto,
  ) {
    return this.saleOrderCancelService.update(+id, updateSaleOrderCancelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderCancelService.remove(+id);
  }
}
//gestion-ordenes-canceladas                                              # (public.sale_order_cancel)
//# Gestión de órdenes de venta canceladas.

//seguimiento-cancelaciones                                               # (public.sale_order_cancel)
//# Seguimiento de las cancelaciones de órdenes de venta.
