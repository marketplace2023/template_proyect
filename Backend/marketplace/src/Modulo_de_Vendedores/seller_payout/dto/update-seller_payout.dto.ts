import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerPayoutDto } from './create-seller_payout.dto';

export class UpdateSellerPayoutDto extends PartialType(CreateSellerPayoutDto) {}
