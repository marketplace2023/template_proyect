import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountPaymentRegisterDto } from './create-account_payment_register.dto';

export class UpdateAccountPaymentRegisterDto extends PartialType(CreateAccountPaymentRegisterDto) {}
