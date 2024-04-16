import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountInvoiceTransactionRelDto } from './create-account_invoice_transaction_rel.dto';

export class UpdateAccountInvoiceTransactionRelDto extends PartialType(CreateAccountInvoiceTransactionRelDto) {}
