import { Injectable } from '@nestjs/common';
import { CreateMailMessageDto } from './dto/create-mail_message.dto';
import { UpdateMailMessageDto } from './dto/update-mail_message.dto';

@Injectable()
export class MailMessageService {
  create(createMailMessageDto: CreateMailMessageDto) {
    return 'This action adds a new mailMessage';
  }

  findAll() {
    return `This action returns all mailMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailMessage`;
  }

  update(id: number, updateMailMessageDto: UpdateMailMessageDto) {
    return `This action updates a #${id} mailMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailMessage`;
  }
}
