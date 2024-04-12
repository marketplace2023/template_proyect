import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentAcquirerDto } from './create-payment_acquirer.dto';

export class UpdatePaymentAcquirerDto extends PartialType(CreatePaymentAcquirerDto) {}
