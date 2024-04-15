import { PartialType } from '@nestjs/mapped-types';
import { CreateIrActWindowDto } from './create-ir_act_window.dto';

export class UpdateIrActWindowDto extends PartialType(CreateIrActWindowDto) {}
