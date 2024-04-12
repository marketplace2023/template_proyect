import { PartialType } from '@nestjs/mapped-types';
import { CreateResGroupDto } from './create-res_group.dto';

export class UpdateResGroupDto extends PartialType(CreateResGroupDto) {}
