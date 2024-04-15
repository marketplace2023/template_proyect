import { Module } from '@nestjs/common';
import { MailMessageSubtypeService } from './mail_message_subtype.service';
import { MailMessageSubtypeController } from './mail_message_subtype.controller';

@Module({
  controllers: [MailMessageSubtypeController],
  providers: [MailMessageSubtypeService],
})
export class MailMessageSubtypeModule {}
