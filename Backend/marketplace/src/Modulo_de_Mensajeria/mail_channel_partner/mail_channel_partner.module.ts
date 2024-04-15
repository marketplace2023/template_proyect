import { Module } from '@nestjs/common';
import { MailChannelPartnerService } from './mail_channel_partner.service';
import { MailChannelPartnerController } from './mail_channel_partner.controller';

@Module({
  controllers: [MailChannelPartnerController],
  providers: [MailChannelPartnerService],
})
export class MailChannelPartnerModule {}
