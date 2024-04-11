import { Module } from '@nestjs/common';
import { MailLinkPreviewController } from './mail-link-preview.controller';
import { MailLinkPreviewService } from './mail-link-preview.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailLinkPreview } from './entities/mail-link-preview.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailLinkPreview])],
  controllers: [MailLinkPreviewController],
  providers: [MailLinkPreviewService],
})
export class MailLinkPreviewModule {}
