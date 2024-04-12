import { PartialType } from '@nestjs/mapped-types';
import { CreateStockQuantDto } from './create-stock_quant.dto';

export class UpdateStockQuantDto extends PartialType(CreateStockQuantDto) {}
