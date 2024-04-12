import { PartialType } from '@nestjs/mapped-types';
import { CreateStockPickingDto } from './create-stock_picking.dto';

export class UpdateStockPickingDto extends PartialType(CreateStockPickingDto) {}
