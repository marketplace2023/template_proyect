import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailTemplateController } from './mail-template.controller';
import { MailTemplateService } from './mail-template.service';
import { MailTemplate } from './entities/mail-template-preview-entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailTemplate])],
  controllers: [MailTemplateController],
  providers: [MailTemplateService],
})
export class MailTemplateModule {}
