import { Module } from '@nestjs/common';
import { MailMessageRelationService } from './mail_message_relation.service';
import { MailMessageRelationController } from './mail_message_relation.controller';

@Module({
  controllers: [MailMessageRelationController],
  providers: [MailMessageRelationService],
})
export class MailMessageRelationModule {}
