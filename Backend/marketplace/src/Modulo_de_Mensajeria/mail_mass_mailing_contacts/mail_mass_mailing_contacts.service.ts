import { Injectable } from '@nestjs/common';
import { CreateMailMassMailingContactDto } from './dto/create-mail_mass_mailing_contact.dto';
import { UpdateMailMassMailingContactDto } from './dto/update-mail_mass_mailing_contact.dto';

@Injectable()
export class MailMassMailingContactsService {
  create(createMailMassMailingContactDto: CreateMailMassMailingContactDto) {
    return 'This action adds a new mailMassMailingContact';
  }

  findAll() {
    return `This action returns all mailMassMailingContacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailMassMailingContact`;
  }

  update(id: number, updateMailMassMailingContactDto: UpdateMailMassMailingContactDto) {
    return `This action updates a #${id} mailMassMailingContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailMassMailingContact`;
  }
}
