import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleOrderLineInvoiceRelService } from './sale_order_line_invoice_rel.service';
import { CreateSaleOrderLineInvoiceRelDto } from './dto/create-sale_order_line_invoice_rel.dto';
import { UpdateSaleOrderLineInvoiceRelDto } from './dto/update-sale_order_line_invoice_rel.dto';

@Controller('sale-order-line-invoice-rel')
export class SaleOrderLineInvoiceRelController {
  constructor(
    private readonly saleOrderLineInvoiceRelService: SaleOrderLineInvoiceRelService,
  ) {}

  @Post()
  create(
    @Body() createSaleOrderLineInvoiceRelDto: CreateSaleOrderLineInvoiceRelDto,
  ) {
    return this.saleOrderLineInvoiceRelService.create(
      createSaleOrderLineInvoiceRelDto,
    );
  }

  @Get()
  findAll() {
    return this.saleOrderLineInvoiceRelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleOrderLineInvoiceRelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleOrderLineInvoiceRelDto: UpdateSaleOrderLineInvoiceRelDto,
  ) {
    return this.saleOrderLineInvoiceRelService.update(
      +id,
      updateSaleOrderLineInvoiceRelDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleOrderLineInvoiceRelService.remove(+id);
  }
}
//integracion-facturacion-ventas                                # (public.sale_order_line_invoice_rel)
//# Integración de la facturación con las ventas realizadas.

//integracion-facturacion-ventas                               # (public.sale_order_line_invoice_rel)
//# Integración de la facturación con las ventas realizadas.
