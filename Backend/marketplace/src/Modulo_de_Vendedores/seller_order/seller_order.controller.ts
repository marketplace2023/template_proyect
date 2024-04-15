import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerOrderService } from './seller_order.service';
import { CreateSellerOrderDto } from './dto/create-seller_order.dto';
import { UpdateSellerOrderDto } from './dto/update-seller_order.dto';

@Controller('seller-order')
export class SellerOrderController {
  constructor(private readonly sellerOrderService: SellerOrderService) {}

  @Post()
  create(@Body() createSellerOrderDto: CreateSellerOrderDto) {
    return this.sellerOrderService.create(createSellerOrderDto);
  }

  @Get()
  findAll() {
    return this.sellerOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerOrderService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerOrderDto: UpdateSellerOrderDto,
  ) {
    return this.sellerOrderService.update(+id, updateSellerOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerOrderService.remove(+id);
  }
}
//registro-seguimiento-ordenes                                              # (seller.order, seller.shipping)
//# Desde la recepción hasta la entrega, gestionando logística de envíos.

//informe-ventas-vendedor                                                    # (seller.analytics, seller.order)
//# Análisis detallado de ventas, ordenes y productos más vendidos por vendedor.
