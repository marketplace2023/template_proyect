import { Injectable } from '@nestjs/common';
import { CreateMailActivityDto } from './dto/create-mail_activity.dto';
import { UpdateMailActivityDto } from './dto/update-mail_activity.dto';

@Injectable()
export class MailActivityService {
  create(createMailActivityDto: CreateMailActivityDto) {
    return 'This action adds a new mailActivity';
  }

  findAll() {
    return `This action returns all mailActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailActivity`;
  }

  update(id: number, updateMailActivityDto: UpdateMailActivityDto) {
    return `This action updates a #${id} mailActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailActivity`;
  }
}
