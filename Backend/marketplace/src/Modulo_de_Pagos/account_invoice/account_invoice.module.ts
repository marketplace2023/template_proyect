import { Module } from '@nestjs/common';
import { AccountInvoiceService } from './account_invoice.service';
import { AccountInvoiceController } from './account_invoice.controller';

@Module({
  controllers: [AccountInvoiceController],
  providers: [AccountInvoiceService],
})
export class AccountInvoiceModule {}
