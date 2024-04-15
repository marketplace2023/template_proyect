import { PartialType } from '@nestjs/mapped-types';
import { CreateIrModelDto } from './create-ir_model.dto';

export class UpdateIrModelDto extends PartialType(CreateIrModelDto) {}
