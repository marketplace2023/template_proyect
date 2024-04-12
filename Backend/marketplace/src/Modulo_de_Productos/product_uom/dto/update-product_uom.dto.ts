import { PartialType } from '@nestjs/mapped-types';
import { CreateProductUomDto } from './create-product_uom.dto';

export class UpdateProductUomDto extends PartialType(CreateProductUomDto) {}
