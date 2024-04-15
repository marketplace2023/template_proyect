import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerRatingDto } from './create-seller_rating.dto';

export class UpdateSellerRatingDto extends PartialType(CreateSellerRatingDto) {}
