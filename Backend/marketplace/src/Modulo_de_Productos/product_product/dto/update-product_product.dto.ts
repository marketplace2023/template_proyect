import { PartialType } from '@nestjs/mapped-types';
import { CreateProductProductDto } from './create-product_product.dto';

export class UpdateProductProductDto extends PartialType(CreateProductProductDto) {}
