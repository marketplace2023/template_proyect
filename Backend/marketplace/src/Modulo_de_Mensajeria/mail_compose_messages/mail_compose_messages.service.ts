import { Injectable } from '@nestjs/common';
import { CreateMailComposeMessageDto } from './dto/create-mail_compose_message.dto';
import { UpdateMailComposeMessageDto } from './dto/update-mail_compose_message.dto';

@Injectable()
export class MailComposeMessagesService {
  create(createMailComposeMessageDto: CreateMailComposeMessageDto) {
    return 'This action adds a new mailComposeMessage';
  }

  findAll() {
    return `This action returns all mailComposeMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailComposeMessage`;
  }

  update(id: number, updateMailComposeMessageDto: UpdateMailComposeMessageDto) {
    return `This action updates a #${id} mailComposeMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailComposeMessage`;
  }
}
