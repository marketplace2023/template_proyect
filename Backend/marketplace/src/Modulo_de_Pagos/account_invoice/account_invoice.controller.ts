import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountInvoiceService } from './account_invoice.service';
import { CreateAccountInvoiceDto } from './dto/create-account_invoice.dto';
import { UpdateAccountInvoiceDto } from './dto/update-account_invoice.dto';

@Controller('account-invoice')
export class AccountInvoiceController {
  constructor(private readonly accountInvoiceService: AccountInvoiceService) {}

  @Post()
  create(@Body() createAccountInvoiceDto: CreateAccountInvoiceDto) {
    return this.accountInvoiceService.create(createAccountInvoiceDto);
  }

  @Get()
  findAll() {
    return this.accountInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountInvoiceDto: UpdateAccountInvoiceDto,
  ) {
    return this.accountInvoiceService.update(+id, updateAccountInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountInvoiceService.remove(+id);
  }
}
//emision-y-gestion-facturas                                                       # (account_invoice)
//# Procesamiento y administración de facturas hacia clientes, incluyendo el seguimiento de pagos.

//seguimiento-facturas-clientes                                                    # (account_invoice)
//# Reportes detallados sobre el estado, pago y vencimiento de las facturas emitidas.
