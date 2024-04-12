import { PartialType } from '@nestjs/mapped-types';
import { CreateIrRuleDto } from './create-ir_rule.dto';

export class UpdateIrRuleDto extends PartialType(CreateIrRuleDto) {}
