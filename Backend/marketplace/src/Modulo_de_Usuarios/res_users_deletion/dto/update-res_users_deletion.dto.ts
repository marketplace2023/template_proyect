import { PartialType } from '@nestjs/mapped-types';
import { CreateResUsersDeletionDto } from './create-res_users_deletion.dto';

export class UpdateResUsersDeletionDto extends PartialType(CreateResUsersDeletionDto) {}
