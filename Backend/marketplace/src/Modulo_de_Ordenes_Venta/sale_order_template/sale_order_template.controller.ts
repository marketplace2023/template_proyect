import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderTemplateService } from './sale_order_template.service';
import { CreateSaleOrderTemplateDto } from './dto/create-sale_order_template.dto';
import { UpdateSaleOrderTemplateDto } from './dto/update-sale_order_template.dto';

@Controller('sale-order-template')
export class SaleOrderTemplateController {
  constructor(
    private readonly saleOrderTemplateService: SaleOrderTemplateService,
  ) {}

  @Post()
  create(@Body() createSaleOrderTemplateDto: CreateSaleOrderTemplateDto) {
    return this.saleOrderTemplateService.create(createSaleOrderTemplateDto);
  }

  @Get()
  findAll() {
    return this.saleOrderTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderTemplateDto: UpdateSaleOrderTemplateDto,
  ) {
    return this.saleOrderTemplateService.update(
      +id,
      updateSaleOrderTemplateDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderTemplateService.remove(+id);
  }
}
//definicion-plantillas-ordenes                                         # (public.sale_order_template)
//# Definición de plantillas para la creación de órdenes de venta.

//personalizacion-plantillas                                            # (public.sale_order_template)
//# Personalización de las plantillas utilizadas para crear órdenes de venta.

//eficacia-plantillas-ordenes                                           # (public.sale_order_template)
//# Evaluación de la eficacia de las plantillas de órdenes de venta.

//personalizacion-plantillas                                            # (public.sale_order_template)
//# Análisis de la personalización de las plantillas de órdenes de venta.

//creacion-plantillas                      # (public.sale_order_template)
//# Creación de plantillas para cotizaciones y órdenes de venta.

//uso-plantillas-cotizaciones              # (public.sale_order_template)
//# Uso de plantillas predefinidas en cotizaciones y órdenes de venta.

//diseño-estructura-plantilla               # (public.sale_order_template)
//# Diseño y estructura de las plantillas para cotizaciones y órdenes de venta.

//configuracion-elementos-predeterminados   # (public.sale_order_template)
//# Configuración de elementos predeterminados en las plantillas para cotizaciones y órdenes de venta.

//uso-plantillas-cotizacion      # (public.sale_order_template)
//# Reporte del uso de plantillas en cotizaciones y órdenes de venta.

//eficiencia-plantillas-ventas   # (public.sale_order_template)
//# Análisis de la eficiencia en el uso de plantillas para cotizaciones y órdenes de venta.
