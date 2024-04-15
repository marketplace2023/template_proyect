import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleOrderOptionDto } from './create-sale_order_option.dto';

export class UpdateSaleOrderOptionDto extends PartialType(CreateSaleOrderOptionDto) {}
