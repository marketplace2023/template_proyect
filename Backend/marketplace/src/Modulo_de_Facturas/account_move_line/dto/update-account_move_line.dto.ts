import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountMoveLineDto } from './create-account_move_line.dto';

export class UpdateAccountMoveLineDto extends PartialType(CreateAccountMoveLineDto) {}
