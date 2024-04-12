import { PartialType } from '@nestjs/mapped-types';
import { CreateStockMoveLineDto } from './create-stock_move_line.dto';

export class UpdateStockMoveLineDto extends PartialType(CreateStockMoveLineDto) {}
