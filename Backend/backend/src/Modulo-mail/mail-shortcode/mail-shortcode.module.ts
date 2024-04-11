import { Module } from '@nestjs/common';
import { MailShortcodeController } from './mail-shortcode.controller';
import { MailShortcodeService } from './mail-shortcode.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailShortcode } from './entities/mail-shortcode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailShortcode])],
  controllers: [MailShortcodeController],
  providers: [MailShortcodeService],
})
export class MailShortcodeModule {}
