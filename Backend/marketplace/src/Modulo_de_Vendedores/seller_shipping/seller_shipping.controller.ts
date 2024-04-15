import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerShippingService } from './seller_shipping.service';
import { CreateSellerShippingDto } from './dto/create-seller_shipping.dto';
import { UpdateSellerShippingDto } from './dto/update-seller_shipping.dto';

@Controller('seller-shipping')
export class SellerShippingController {
  constructor(private readonly sellerShippingService: SellerShippingService) {}

  @Post()
  create(@Body() createSellerShippingDto: CreateSellerShippingDto) {
    return this.sellerShippingService.create(createSellerShippingDto);
  }

  @Get()
  findAll() {
    return this.sellerShippingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerShippingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerShippingDto: UpdateSellerShippingDto,
  ) {
    return this.sellerShippingService.update(+id, updateSellerShippingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerShippingService.remove(+id);
  }
}
//registro-seguimiento-ordenes                                              # (seller.order, seller.shipping)
//# Desde la recepción hasta la entrega, gestionando logística de envíos.

//definicion-politicas-envio                                          # (seller.shipping)
//# Establecimiento de criterios para la logística de envío de productos.
