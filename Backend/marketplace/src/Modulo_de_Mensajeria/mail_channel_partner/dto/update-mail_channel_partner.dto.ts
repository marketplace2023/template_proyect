import { PartialType } from '@nestjs/mapped-types';
import { CreateMailChannelPartnerDto } from './create-mail_channel_partner.dto';

export class UpdateMailChannelPartnerDto extends PartialType(CreateMailChannelPartnerDto) {}
