import { Injectable } from '@nestjs/common';
import { CreateMailChannelDto } from './dto/create-mail_channel.dto';
import { UpdateMailChannelDto } from './dto/update-mail_channel.dto';

@Injectable()
export class MailChannelService {
  create(createMailChannelDto: CreateMailChannelDto) {
    return 'This action adds a new mailChannel';
  }

  findAll() {
    return `This action returns all mailChannel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailChannel`;
  }

  update(id: number, updateMailChannelDto: UpdateMailChannelDto) {
    return `This action updates a #${id} mailChannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailChannel`;
  }
}
