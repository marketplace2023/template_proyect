import { Module } from '@nestjs/common';
import { MailResendMessageService } from './mail-resend-message.service';
import { MailResendMessageController } from './mail-resend-message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailResendMessage } from './entities/mail-resend-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailResendMessage])],
  controllers: [MailResendMessageController],
  providers: [MailResendMessageService],
})
export class MailResendMessageModule {}
