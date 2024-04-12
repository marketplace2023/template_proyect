import { PartialType } from '@nestjs/mapped-types';
import { CreateProductBrandDto } from './create-product_brand.dto';

export class UpdateProductBrandDto extends PartialType(CreateProductBrandDto) {}
