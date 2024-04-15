import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerProductDto } from './create-seller_product.dto';

export class UpdateSellerProductDto extends PartialType(CreateSellerProductDto) {}
