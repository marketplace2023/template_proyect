import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleOrderLineInvoiceRelDto } from './create-sale_order_line_invoice_rel.dto';

export class UpdateSaleOrderLineInvoiceRelDto extends PartialType(CreateSaleOrderLineInvoiceRelDto) {}
