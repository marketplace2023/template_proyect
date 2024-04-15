import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponProgramService } from './sale_coupon_program.service';
import { CreateSaleCouponProgramDto } from './dto/create-sale_coupon_program.dto';
import { UpdateSaleCouponProgramDto } from './dto/update-sale_coupon_program.dto';

@Controller('sale-coupon-program')
export class SaleCouponProgramController {
  constructor(
    private readonly saleCouponProgramService: SaleCouponProgramService,
  ) {}

  @Post()
  create(@Body() createSaleCouponProgramDto: CreateSaleCouponProgramDto) {
    return this.saleCouponProgramService.create(createSaleCouponProgramDto);
  }

  @Get()
  findAll() {
    return this.saleCouponProgramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponProgramService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponProgramDto: UpdateSaleCouponProgramDto,
  ) {
    return this.saleCouponProgramService.update(
      +id,
      updateSaleCouponProgramDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponProgramService.remove(+id);
  }
}
//gestion-programas-cupones                                             # (sale.coupon.program)
//# Define los programas de cupones que establecen reglas y condiciones para la emisión y uso de cupones de descuento.

//configuracion-programas-cupones                                         # (sale.coupon.program)
//# Configura los programas de cupones para establecer reglas y condiciones.
