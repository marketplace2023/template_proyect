import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountPaymentDto } from './create-account_payment.dto';

export class UpdateAccountPaymentDto extends PartialType(CreateAccountPaymentDto) {}
