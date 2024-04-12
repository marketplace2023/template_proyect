import { PartialType } from '@nestjs/mapped-types';
import { CreateRatingRatingDto } from './create-rating_rating.dto';

export class UpdateRatingRatingDto extends PartialType(CreateRatingRatingDto) {}
