import { Module } from '@nestjs/common';
import { MailTemplatePreviewService } from './mail_template_preview.service';
import { MailTemplatePreviewController } from './mail_template_preview.controller';

@Module({
  controllers: [MailTemplatePreviewController],
  providers: [MailTemplatePreviewService],
})
export class MailTemplatePreviewModule {}
