import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleOrderDiscountDto } from './create-sale_order_discount.dto';

export class UpdateSaleOrderDiscountDto extends PartialType(CreateSaleOrderDiscountDto) {}
