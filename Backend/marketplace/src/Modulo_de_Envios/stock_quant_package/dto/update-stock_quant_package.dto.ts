import { PartialType } from '@nestjs/mapped-types';
import { CreateStockQuantPackageDto } from './create-stock_quant_package.dto';

export class UpdateStockQuantPackageDto extends PartialType(CreateStockQuantPackageDto) {}
