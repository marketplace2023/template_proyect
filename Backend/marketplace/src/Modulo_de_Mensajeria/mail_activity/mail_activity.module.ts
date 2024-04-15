import { Module } from '@nestjs/common';
import { MailActivityService } from './mail_activity.service';
import { MailActivityController } from './mail_activity.controller';

@Module({
  controllers: [MailActivityController],
  providers: [MailActivityService],
})
export class MailActivityModule {}
