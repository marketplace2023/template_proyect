import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderDiscountService } from './sale_order_discount.service';
import { CreateSaleOrderDiscountDto } from './dto/create-sale_order_discount.dto';
import { UpdateSaleOrderDiscountDto } from './dto/update-sale_order_discount.dto';

@Controller('sale-order-discount')
export class SaleOrderDiscountController {
  constructor(
    private readonly saleOrderDiscountService: SaleOrderDiscountService,
  ) {}

  @Post()
  create(@Body() createSaleOrderDiscountDto: CreateSaleOrderDiscountDto) {
    return this.saleOrderDiscountService.create(createSaleOrderDiscountDto);
  }

  @Get()
  findAll() {
    return this.saleOrderDiscountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderDiscountService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderDiscountDto: UpdateSaleOrderDiscountDto,
  ) {
    return this.saleOrderDiscountService.update(
      +id,
      updateSaleOrderDiscountDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderDiscountService.remove(+id);
  }
}
//gestion-descuentos-ordenes                                            # (public.sale_order_discount)
//# Gestión de descuentos aplicados en las órdenes de venta.

//configuracion-descuentos                                              # (public.sale_order_discount)
//# Configuración de descuentos para aplicar en las órdenes de venta.

//impacto-descuentos-ventas                                            # (public.sale_order_discount)
//# Impacto de los descuentos en las ventas.

//aplicacion-descuentos                    # (public.sale_order_discount)
//# Aplicación de descuentos en cotizaciones y órdenes de venta.

//actualizacion-descuentos                 # (public.sale_order_discount)
//# Actualización de descuentos en cotizaciones y órdenes de venta.

//configuracion-reglas-descuento            # (public.sale_order_discount)
//# Configuración de reglas de descuento en cotizaciones y órdenes de venta.
