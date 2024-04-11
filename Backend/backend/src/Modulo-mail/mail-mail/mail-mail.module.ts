import { Module } from '@nestjs/common';
import { MailMailController } from './mail-mail.controller';
import { MailMailService } from './mail-mail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailMail } from './entities/mail-mail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailMail])],
  controllers: [MailMailController],
  providers: [MailMailService],
})
export class MailMailModule {}
