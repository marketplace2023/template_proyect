import { PartialType } from '@nestjs/mapped-types';
import { CreateCrmTeamDto } from './create-crm_team.dto';

export class UpdateCrmTeamDto extends PartialType(CreateCrmTeamDto) {}
