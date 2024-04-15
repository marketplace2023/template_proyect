import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerTaxDto } from './create-seller_tax.dto';

export class UpdateSellerTaxDto extends PartialType(CreateSellerTaxDto) {}
