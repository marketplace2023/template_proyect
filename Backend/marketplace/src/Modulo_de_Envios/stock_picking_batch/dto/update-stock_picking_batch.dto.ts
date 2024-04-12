import { PartialType } from '@nestjs/mapped-types';
import { CreateStockPickingBatchDto } from './create-stock_picking_batch.dto';

export class UpdateStockPickingBatchDto extends PartialType(CreateStockPickingBatchDto) {}
