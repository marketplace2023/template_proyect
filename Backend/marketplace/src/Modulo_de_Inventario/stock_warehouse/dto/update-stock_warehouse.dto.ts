import { PartialType } from '@nestjs/mapped-types';
import { CreateStockWarehouseDto } from './create-stock_warehouse.dto';

export class UpdateStockWarehouseDto extends PartialType(CreateStockWarehouseDto) {}
