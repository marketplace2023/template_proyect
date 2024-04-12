import { PartialType } from '@nestjs/mapped-types';
import { CreateRatingMixinDto } from './create-rating_mixin.dto';

export class UpdateRatingMixinDto extends PartialType(CreateRatingMixinDto) {}
