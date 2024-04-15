import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountPaymentAcquirerDto } from './create-account_payment_acquirer.dto';

export class UpdateAccountPaymentAcquirerDto extends PartialType(CreateAccountPaymentAcquirerDto) {}
