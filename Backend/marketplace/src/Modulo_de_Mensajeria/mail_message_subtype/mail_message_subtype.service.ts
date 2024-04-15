import { Injectable } from '@nestjs/common';
import { CreateMailMessageSubtypeDto } from './dto/create-mail_message_subtype.dto';
import { UpdateMailMessageSubtypeDto } from './dto/update-mail_message_subtype.dto';

@Injectable()
export class MailMessageSubtypeService {
  create(createMailMessageSubtypeDto: CreateMailMessageSubtypeDto) {
    return 'This action adds a new mailMessageSubtype';
  }

  findAll() {
    return `This action returns all mailMessageSubtype`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailMessageSubtype`;
  }

  update(id: number, updateMailMessageSubtypeDto: UpdateMailMessageSubtypeDto) {
    return `This action updates a #${id} mailMessageSubtype`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailMessageSubtype`;
  }
}
