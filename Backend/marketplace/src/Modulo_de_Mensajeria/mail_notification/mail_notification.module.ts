import { Module } from '@nestjs/common';
import { MailNotificationService } from './mail_notification.service';
import { MailNotificationController } from './mail_notification.controller';

@Module({
  controllers: [MailNotificationController],
  providers: [MailNotificationService],
})
export class MailNotificationModule {}
