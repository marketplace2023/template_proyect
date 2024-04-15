import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountPaymentTermDto } from './create-account_payment_term.dto';

export class UpdateAccountPaymentTermDto extends PartialType(CreateAccountPaymentTermDto) {}
