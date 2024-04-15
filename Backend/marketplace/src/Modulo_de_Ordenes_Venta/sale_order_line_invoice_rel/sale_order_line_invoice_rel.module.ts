import { Module } from '@nestjs/common';
import { SaleOrderLineInvoiceRelService } from './sale_order_line_invoice_rel.service';
import { SaleOrderLineInvoiceRelController } from './sale_order_line_invoice_rel.controller';

@Module({
  controllers: [SaleOrderLineInvoiceRelController],
  providers: [SaleOrderLineInvoiceRelService],
})
export class SaleOrderLineInvoiceRelModule {}
