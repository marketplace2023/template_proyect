import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPricelistDto } from './create-product_pricelist.dto';

export class UpdateProductPricelistDto extends PartialType(CreateProductPricelistDto) {}
