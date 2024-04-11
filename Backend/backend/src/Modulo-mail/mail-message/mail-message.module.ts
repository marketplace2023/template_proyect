import { Module } from '@nestjs/common';
import { MailMessageController } from './mail-message.controller';
import { MailMessageService } from './mail-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailMessage } from './entities/mail-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailMessage])],
  controllers: [MailMessageController],
  providers: [MailMessageService],
})
export class MailMessageModule {}
