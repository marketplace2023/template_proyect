import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleOrderCancelDto } from './create-sale_order_cancel.dto';

export class UpdateSaleOrderCancelDto extends PartialType(CreateSaleOrderCancelDto) {}
