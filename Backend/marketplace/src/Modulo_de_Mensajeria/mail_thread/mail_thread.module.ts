import { Module } from '@nestjs/common';
import { MailThreadService } from './mail_thread.service';
import { MailThreadController } from './mail_thread.controller';

@Module({
  controllers: [MailThreadController],
  providers: [MailThreadService],
})
export class MailThreadModule {}
