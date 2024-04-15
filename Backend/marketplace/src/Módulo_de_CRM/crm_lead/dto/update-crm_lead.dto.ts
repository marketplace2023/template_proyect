import { PartialType } from '@nestjs/mapped-types';
import { CreateCrmLeadDto } from './create-crm_lead.dto';

export class UpdateCrmLeadDto extends PartialType(CreateCrmLeadDto) {}
