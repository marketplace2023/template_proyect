import { Injectable } from '@nestjs/common';
import { CreateMailThreadDto } from './dto/create-mail_thread.dto';
import { UpdateMailThreadDto } from './dto/update-mail_thread.dto';

@Injectable()
export class MailThreadService {
  create(createMailThreadDto: CreateMailThreadDto) {
    return 'This action adds a new mailThread';
  }

  findAll() {
    return `This action returns all mailThread`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailThread`;
  }

  update(id: number, updateMailThreadDto: UpdateMailThreadDto) {
    return `This action updates a #${id} mailThread`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailThread`;
  }
}
