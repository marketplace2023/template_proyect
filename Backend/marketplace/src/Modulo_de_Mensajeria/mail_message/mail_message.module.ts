import { Module } from '@nestjs/common';
import { MailMessageService } from './mail_message.service';
import { MailMessageController } from './mail_message.controller';

@Module({
  controllers: [MailMessageController],
  providers: [MailMessageService],
})
export class MailMessageModule {}
