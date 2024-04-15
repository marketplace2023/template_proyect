import { PartialType } from '@nestjs/mapped-types';
import { CreateCrmStageDto } from './create-crm_stage.dto';

export class UpdateCrmStageDto extends PartialType(CreateCrmStageDto) {}
