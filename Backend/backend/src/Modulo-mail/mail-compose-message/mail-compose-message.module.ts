import { Module } from '@nestjs/common';
import { MailComposeMessageController } from './mail-compose-message.controller';
import { MailComposeMessageService } from './mail-compose-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailComposeMessage } from './entities/mail-compose-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailComposeMessage])],
  controllers: [MailComposeMessageController],
  providers: [MailComposeMessageService],
})
export class MailComposeMessageModule {}
