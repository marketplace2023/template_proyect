import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerPromotionDto } from './create-seller_promotion.dto';

export class UpdateSellerPromotionDto extends PartialType(CreateSellerPromotionDto) {}
