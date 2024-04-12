import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountMoveDto } from './create-account_move.dto';

export class UpdateAccountMoveDto extends PartialType(CreateAccountMoveDto) {}
