import { Injectable } from '@nestjs/common';
import { CreateMailMassMailingDto } from './dto/create-mail_mass_mailing.dto';
import { UpdateMailMassMailingDto } from './dto/update-mail_mass_mailing.dto';

@Injectable()
export class MailMassMailingService {
  create(createMailMassMailingDto: CreateMailMassMailingDto) {
    return 'This action adds a new mailMassMailing';
  }

  findAll() {
    return `This action returns all mailMassMailing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailMassMailing`;
  }

  update(id: number, updateMailMassMailingDto: UpdateMailMassMailingDto) {
    return `This action updates a #${id} mailMassMailing`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailMassMailing`;
  }
}
