import { Module } from '@nestjs/common';
import { MailShortcodeService } from './mail_shortcode.service';
import { MailShortcodeController } from './mail_shortcode.controller';

@Module({
  controllers: [MailShortcodeController],
  providers: [MailShortcodeService],
})
export class MailShortcodeModule {}
