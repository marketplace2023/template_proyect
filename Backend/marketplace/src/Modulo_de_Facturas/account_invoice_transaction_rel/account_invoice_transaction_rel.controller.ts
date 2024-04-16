import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountInvoiceTransactionRelService } from './account_invoice_transaction_rel.service';
import { CreateAccountInvoiceTransactionRelDto } from './dto/create-account_invoice_transaction_rel.dto';
import { UpdateAccountInvoiceTransactionRelDto } from './dto/update-account_invoice_transaction_rel.dto';

@Controller('account-invoice-transaction-rel')
export class AccountInvoiceTransactionRelController {
  constructor(
    private readonly accountInvoiceTransactionRelService: AccountInvoiceTransactionRelService,
  ) {}

  @Post()
  create(
    @Body()
    createAccountInvoiceTransactionRelDto: CreateAccountInvoiceTransactionRelDto,
  ) {
    return this.accountInvoiceTransactionRelService.create(
      createAccountInvoiceTransactionRelDto,
    );
  }

  @Get()
  findAll() {
    return this.accountInvoiceTransactionRelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountInvoiceTransactionRelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateAccountInvoiceTransactionRelDto: UpdateAccountInvoiceTransactionRelDto,
  ) {
    return this.accountInvoiceTransactionRelService.update(
      +id,
      updateAccountInvoiceTransactionRelDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountInvoiceTransactionRelService.remove(+id);
  }
}
//generacion-facturas                     # (public.account_invoice_transaction_rel)
//# Proceso para generar facturas.

//registro-transacciones                  # (public.account_invoice_transaction_rel)
//# Registro de transacciones financieras.

//reporte-facturas                        # (public.account_invoice_transaction_rel)
//# Reporte de facturas generadas.

//analisis-transacciones                  # (public.account_invoice_transaction_rel)
//# Análisis de transacciones financieras.
