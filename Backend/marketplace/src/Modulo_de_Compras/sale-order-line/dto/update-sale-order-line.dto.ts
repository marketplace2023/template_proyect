import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleOrderLineDto } from './create-sale-order-line.dto';

export class UpdateSaleOrderLineDto extends PartialType(CreateSaleOrderLineDto) {}
