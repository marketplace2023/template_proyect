import { Module } from '@nestjs/common';
import { MailMassMailingService } from './mail_mass_mailing.service';
import { MailMassMailingController } from './mail_mass_mailing.controller';

@Module({
  controllers: [MailMassMailingController],
  providers: [MailMassMailingService],
})
export class MailMassMailingModule {}
