import { PartialType } from '@nestjs/mapped-types';
import { CreateIrActServerDto } from './create-ir_act_server.dto';

export class UpdateIrActServerDto extends PartialType(CreateIrActServerDto) {}
