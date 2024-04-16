import { PartialType } from '@nestjs/mapped-types';
import { CreateStockPackageTypeDto } from './create-stock_package_type.dto';

export class UpdateStockPackageTypeDto extends PartialType(CreateStockPackageTypeDto) {}
