import { PartialType } from '@nestjs/mapped-types';
import { CreateMailComposeMessageDto } from './create-mail_compose_message.dto';

export class UpdateMailComposeMessageDto extends PartialType(CreateMailComposeMessageDto) {}
