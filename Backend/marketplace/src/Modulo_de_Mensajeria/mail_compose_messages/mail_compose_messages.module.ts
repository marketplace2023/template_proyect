import { Module } from '@nestjs/common';
import { MailComposeMessagesService } from './mail_compose_messages.service';
import { MailComposeMessagesController } from './mail_compose_messages.controller';

@Module({
  controllers: [MailComposeMessagesController],
  providers: [MailComposeMessagesService],
})
export class MailComposeMessagesModule {}
