import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerCategoryDto } from './create-seller_category.dto';

export class UpdateSellerCategoryDto extends PartialType(CreateSellerCategoryDto) {}
