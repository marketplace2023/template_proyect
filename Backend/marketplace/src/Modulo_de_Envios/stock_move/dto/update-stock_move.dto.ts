import { PartialType } from '@nestjs/mapped-types';
import { CreateStockMoveDto } from './create-stock_move.dto';

export class UpdateStockMoveDto extends PartialType(CreateStockMoveDto) {}
