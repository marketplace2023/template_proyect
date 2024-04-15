import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseOrderLineDto } from './create-purchase_order_line.dto';

export class UpdatePurchaseOrderLineDto extends PartialType(CreatePurchaseOrderLineDto) {}
