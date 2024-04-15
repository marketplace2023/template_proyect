import { PartialType } from '@nestjs/mapped-types';
import { CreateMailMessageRelationDto } from './create-mail_message_relation.dto';

export class UpdateMailMessageRelationDto extends PartialType(CreateMailMessageRelationDto) {}
