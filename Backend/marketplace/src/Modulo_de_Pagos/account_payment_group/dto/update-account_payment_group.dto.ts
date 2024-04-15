import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountPaymentGroupDto } from './create-account_payment_group.dto';

export class UpdateAccountPaymentGroupDto extends PartialType(CreateAccountPaymentGroupDto) {}
