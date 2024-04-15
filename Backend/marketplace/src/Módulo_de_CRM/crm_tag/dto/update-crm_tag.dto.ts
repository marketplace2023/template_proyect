import { PartialType } from '@nestjs/mapped-types';
import { CreateCrmTagDto } from './create-crm_tag.dto';

export class UpdateCrmTagDto extends PartialType(CreateCrmTagDto) {}
