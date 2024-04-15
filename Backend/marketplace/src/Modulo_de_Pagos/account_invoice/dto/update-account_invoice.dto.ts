import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountInvoiceDto } from './create-account_invoice.dto';

export class UpdateAccountInvoiceDto extends PartialType(CreateAccountInvoiceDto) {}
