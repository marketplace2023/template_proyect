import { PartialType } from '@nestjs/mapped-types';
import { CreateMailMessageSubtypeDto } from './create-mail_message_subtype.dto';

export class UpdateMailMessageSubtypeDto extends PartialType(CreateMailMessageSubtypeDto) {}
