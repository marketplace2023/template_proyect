import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerShippingDto } from './create-seller_shipping.dto';

export class UpdateSellerShippingDto extends PartialType(CreateSellerShippingDto) {}
