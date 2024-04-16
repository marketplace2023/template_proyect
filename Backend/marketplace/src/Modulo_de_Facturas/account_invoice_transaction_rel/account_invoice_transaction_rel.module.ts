import { Module } from '@nestjs/common';
import { AccountInvoiceTransactionRelService } from './account_invoice_transaction_rel.service';
import { AccountInvoiceTransactionRelController } from './account_invoice_transaction_rel.controller';

@Module({
  controllers: [AccountInvoiceTransactionRelController],
  providers: [AccountInvoiceTransactionRelService],
})
export class AccountInvoiceTransactionRelModule {}
