import { Module } from '@nestjs/common';
import { MailMassMailingContactsService } from './mail_mass_mailing_contacts.service';
import { MailMassMailingContactsController } from './mail_mass_mailing_contacts.controller';

@Module({
  controllers: [MailMassMailingContactsController],
  providers: [MailMassMailingContactsService],
})
export class MailMassMailingContactsModule {}
