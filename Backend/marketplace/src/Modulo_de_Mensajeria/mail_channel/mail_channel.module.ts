import { Module } from '@nestjs/common';
import { MailChannelService } from './mail_channel.service';
import { MailChannelController } from './mail_channel.controller';

@Module({
  controllers: [MailChannelController],
  providers: [MailChannelService],
})
export class MailChannelModule {}
