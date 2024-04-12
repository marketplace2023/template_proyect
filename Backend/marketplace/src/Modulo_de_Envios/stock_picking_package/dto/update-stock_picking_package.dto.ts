import { PartialType } from '@nestjs/mapped-types';
import { CreateStockPickingPackageDto } from './create-stock_picking_package.dto';

export class UpdateStockPickingPackageDto extends PartialType(CreateStockPickingPackageDto) {}
