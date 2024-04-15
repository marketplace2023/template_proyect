import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponService } from './sale_coupon.service';
import { CreateSaleCouponDto } from './dto/create-sale_coupon.dto';
import { UpdateSaleCouponDto } from './dto/update-sale_coupon.dto';

@Controller('sale-coupon')
export class SaleCouponController {
  constructor(private readonly saleCouponService: SaleCouponService) {}

  @Post()
  create(@Body() createSaleCouponDto: CreateSaleCouponDto) {
    return this.saleCouponService.create(createSaleCouponDto);
  }

  @Get()
  findAll() {
    return this.saleCouponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponDto: UpdateSaleCouponDto,
  ) {
    return this.saleCouponService.update(+id, updateSaleCouponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponService.remove(+id);
  }
}
//gestion-cupones-descuento                                                   # (sale.coupon)
//# Administra los cupones de descuento utilizados por los clientes durante el proceso de compra.

//configuracion-cupones-descuento                                                # (sale.coupon)
//# Configura los parámetros generales de los cupones de descuento.
