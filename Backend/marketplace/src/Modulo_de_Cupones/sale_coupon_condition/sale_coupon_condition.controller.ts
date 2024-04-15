import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponConditionService } from './sale_coupon_condition.service';
import { CreateSaleCouponConditionDto } from './dto/create-sale_coupon_condition.dto';
import { UpdateSaleCouponConditionDto } from './dto/update-sale_coupon_condition.dto';

@Controller('sale-coupon-condition')
export class SaleCouponConditionController {
  constructor(
    private readonly saleCouponConditionService: SaleCouponConditionService,
  ) {}

  @Post()
  create(@Body() createSaleCouponConditionDto: CreateSaleCouponConditionDto) {
    return this.saleCouponConditionService.create(createSaleCouponConditionDto);
  }

  @Get()
  findAll() {
    return this.saleCouponConditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponConditionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponConditionDto: UpdateSaleCouponConditionDto,
  ) {
    return this.saleCouponConditionService.update(
      +id,
      updateSaleCouponConditionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponConditionService.remove(+id);
  }
}
//gestion-condiciones-cupones                                           # (sale.coupon.condition)
//# Gestiona las condiciones que deben cumplirse para que un cupón sea válido y aplicable a un pedido.

//configuracion-condiciones-cupones                                     # (sale.coupon.condition)
//# Configura las condiciones que deben cumplirse para que un cupón sea válido.
