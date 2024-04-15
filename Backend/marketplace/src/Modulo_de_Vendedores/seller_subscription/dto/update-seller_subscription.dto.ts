import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerSubscriptionDto } from './create-seller_subscription.dto';

export class UpdateSellerSubscriptionDto extends PartialType(CreateSellerSubscriptionDto) {}
