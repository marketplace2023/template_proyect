import { Module } from '@nestjs/common';
import { MailTemplatePreviewController } from './mail-template-preview.controller';
import { MailTemplatePreviewService } from './mail-template-preview.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailTemplatePreview } from './entities/mail-template-preview-entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailTemplatePreview])],
  controllers: [MailTemplatePreviewController],
  providers: [MailTemplatePreviewService],
})
export class MailTemplatePreviewModule {}
