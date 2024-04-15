import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponTemplateService } from './sale_coupon_template.service';
import { CreateSaleCouponTemplateDto } from './dto/create-sale_coupon_template.dto';
import { UpdateSaleCouponTemplateDto } from './dto/update-sale_coupon_template.dto';

@Controller('sale-coupon-template')
export class SaleCouponTemplateController {
  constructor(
    private readonly saleCouponTemplateService: SaleCouponTemplateService,
  ) {}

  @Post()
  create(@Body() createSaleCouponTemplateDto: CreateSaleCouponTemplateDto) {
    return this.saleCouponTemplateService.create(createSaleCouponTemplateDto);
  }

  @Get()
  findAll() {
    return this.saleCouponTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponTemplateDto: UpdateSaleCouponTemplateDto,
  ) {
    return this.saleCouponTemplateService.update(
      +id,
      updateSaleCouponTemplateDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponTemplateService.remove(+id);
  }
}
//gestion-plantillas-cupones                                             # (sale.coupon.template)
//# Administra las plantillas de cupones para una creación más eficiente.

//configuracion-plantillas-cupones                                       # (sale.coupon.template)
//# Configura las plantillas para la creación eficiente de cupones.
