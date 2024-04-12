import { PartialType } from '@nestjs/mapped-types';
import { CreateIrModelAcceDto } from './create-ir_model_acce.dto';

export class UpdateIrModelAcceDto extends PartialType(CreateIrModelAcceDto) {}
