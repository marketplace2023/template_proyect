import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponTypeService } from './sale_coupon_type.service';
import { CreateSaleCouponTypeDto } from './dto/create-sale_coupon_type.dto';
import { UpdateSaleCouponTypeDto } from './dto/update-sale_coupon_type.dto';

@Controller('sale-coupon-type')
export class SaleCouponTypeController {
  constructor(private readonly saleCouponTypeService: SaleCouponTypeService) {}

  @Post()
  create(@Body() createSaleCouponTypeDto: CreateSaleCouponTypeDto) {
    return this.saleCouponTypeService.create(createSaleCouponTypeDto);
  }

  @Get()
  findAll() {
    return this.saleCouponTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponTypeDto: UpdateSaleCouponTypeDto,
  ) {
    return this.saleCouponTypeService.update(+id, updateSaleCouponTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponTypeService.remove(+id);
  }
}
//definicion-tipos-cupones                                                   # (sale.coupon.type)
//# Define los diferentes tipos de cupones disponibles.

//configuracion-tipos-cupones                                                # (sale.coupon.type)
//# Configura los diferentes tipos de cupones disponibles.
