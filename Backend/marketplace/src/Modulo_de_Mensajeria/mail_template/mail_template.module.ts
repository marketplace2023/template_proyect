import { Module } from '@nestjs/common';
import { MailTemplateService } from './mail_template.service';
import { MailTemplateController } from './mail_template.controller';

@Module({
  controllers: [MailTemplateController],
  providers: [MailTemplateService],
})
export class MailTemplateModule {}
