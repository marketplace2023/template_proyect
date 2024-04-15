import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerPaymentDto } from './create-seller_payment.dto';

export class UpdateSellerPaymentDto extends PartialType(CreateSellerPaymentDto) {}
