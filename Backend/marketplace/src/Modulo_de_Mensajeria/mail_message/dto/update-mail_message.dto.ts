import { PartialType } from '@nestjs/mapped-types';
import { CreateMailMessageDto } from './create-mail_message.dto';

export class UpdateMailMessageDto extends PartialType(CreateMailMessageDto) {}
