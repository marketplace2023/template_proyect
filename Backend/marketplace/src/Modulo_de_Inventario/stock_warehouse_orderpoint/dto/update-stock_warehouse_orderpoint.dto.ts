import { PartialType } from '@nestjs/mapped-types';
import { CreateStockWarehouseOrderpointDto } from './create-stock_warehouse_orderpoint.dto';

export class UpdateStockWarehouseOrderpointDto extends PartialType(CreateStockWarehouseOrderpointDto) {}
