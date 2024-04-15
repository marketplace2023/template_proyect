import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerCommissionDto } from './create-seller_commission.dto';

export class UpdateSellerCommissionDto extends PartialType(CreateSellerCommissionDto) {}
