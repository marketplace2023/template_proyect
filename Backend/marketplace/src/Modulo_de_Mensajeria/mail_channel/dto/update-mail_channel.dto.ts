import { PartialType } from '@nestjs/mapped-types';
import { CreateMailChannelDto } from './create-mail_channel.dto';

export class UpdateMailChannelDto extends PartialType(CreateMailChannelDto) {}
