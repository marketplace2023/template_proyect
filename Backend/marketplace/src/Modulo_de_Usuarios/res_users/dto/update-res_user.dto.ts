import { PartialType } from '@nestjs/mapped-types';
import { CreateResUserDto } from './create-res_user.dto';

export class UpdateResUserDto extends PartialType(CreateResUserDto) {}
