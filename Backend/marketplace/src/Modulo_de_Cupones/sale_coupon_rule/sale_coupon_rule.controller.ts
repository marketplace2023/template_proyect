import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponRuleService } from './sale_coupon_rule.service';
import { CreateSaleCouponRuleDto } from './dto/create-sale_coupon_rule.dto';
import { UpdateSaleCouponRuleDto } from './dto/update-sale_coupon_rule.dto';

@Controller('sale-coupon-rule')
export class SaleCouponRuleController {
  constructor(private readonly saleCouponRuleService: SaleCouponRuleService) {}

  @Post()
  create(@Body() createSaleCouponRuleDto: CreateSaleCouponRuleDto) {
    return this.saleCouponRuleService.create(createSaleCouponRuleDto);
  }

  @Get()
  findAll() {
    return this.saleCouponRuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponRuleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponRuleDto: UpdateSaleCouponRuleDto,
  ) {
    return this.saleCouponRuleService.update(+id, updateSaleCouponRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponRuleService.remove(+id);
  }
}
//definicion-reglas-cupones                                                 # (sale.coupon.rule)
//# Define las reglas aplicables a los cupones de descuento.

//configuracion-reglas-cupones                                               # (sale.coupon.rule)
//# Configura las reglas aplicables a los cupones de descuento.
