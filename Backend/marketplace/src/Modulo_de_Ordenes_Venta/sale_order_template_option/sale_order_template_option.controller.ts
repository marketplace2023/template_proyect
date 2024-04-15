import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderTemplateOptionService } from './sale_order_template_option.service';
import { CreateSaleOrderTemplateOptionDto } from './dto/create-sale_order_template_option.dto';
import { UpdateSaleOrderTemplateOptionDto } from './dto/update-sale_order_template_option.dto';

@Controller('sale-order-template-option')
export class SaleOrderTemplateOptionController {
  constructor(
    private readonly saleOrderTemplateOptionService: SaleOrderTemplateOptionService,
  ) {}

  @Post()
  create(
    @Body() createSaleOrderTemplateOptionDto: CreateSaleOrderTemplateOptionDto,
  ) {
    return this.saleOrderTemplateOptionService.create(
      createSaleOrderTemplateOptionDto,
    );
  }

  @Get()
  findAll() {
    return this.saleOrderTemplateOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderTemplateOptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderTemplateOptionDto: UpdateSaleOrderTemplateOptionDto,
  ) {
    return this.saleOrderTemplateOptionService.update(
      +id,
      updateSaleOrderTemplateOptionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderTemplateOptionService.remove(+id);
  }
}
//configuracion-opciones-plantillas                              # (public.sale_order_template_option)
//# Configuración de las opciones de las plantillas de órdenes de venta.

//personalizacion-opciones-plantillas                            # (public.sale_order_template_option)
//# Personalización de las opciones de las plantillas de órdenes de venta.
