import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountPaymentMethodDto } from './create-account_payment_method.dto';

export class UpdateAccountPaymentMethodDto extends PartialType(CreateAccountPaymentMethodDto) {}
