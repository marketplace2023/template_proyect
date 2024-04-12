import { PartialType } from '@nestjs/mapped-types';
import { CreateStockPackOperationDto } from './create-stock_pack_operation.dto';

export class UpdateStockPackOperationDto extends PartialType(CreateStockPackOperationDto) {}
