import { PartialType } from '@nestjs/mapped-types';
import { CreateStockProductionLotDto } from './create-stock_production_lot.dto';

export class UpdateStockProductionLotDto extends PartialType(CreateStockProductionLotDto) {}
