import { Injectable } from '@nestjs/common';
import { CreateSaleOrderLineInvoiceRelDto } from './dto/create-sale_order_line_invoice_rel.dto';
import { UpdateSaleOrderLineInvoiceRelDto } from './dto/update-sale_order_line_invoice_rel.dto';

@Injectable()
export class SaleOrderLineInvoiceRelService {
  create(createSaleOrderLineInvoiceRelDto: CreateSaleOrderLineInvoiceRelDto) {
    return 'This action adds a new saleOrderLineInvoiceRel';
  }

  findAll() {
    return `This action returns all saleOrderLineInvoiceRel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleOrderLineInvoiceRel`;
  }

  update(id: number, updateSaleOrderLineInvoiceRelDto: UpdateSaleOrderLineInvoiceRelDto) {
    return `This action updates a #${id} saleOrderLineInvoiceRel`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleOrderLineInvoiceRel`;
  }
}
