import { PartialType } from '@nestjs/mapped-types';
import { CreateMailActivityDto } from './create-mail_activity.dto';

export class UpdateMailActivityDto extends PartialType(CreateMailActivityDto) {}
